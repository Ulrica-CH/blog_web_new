<script setup lang="ts">
import { reactive, ref, h, onMounted } from 'vue'
import { ElNotification, ElMessage, ElLoading } from 'element-plus'
import CommonBg from '@/components/CommonBg/index.vue'
import CommonDialog from '@/components/CommonDialog/index.vue'
import friend_bg from '@/assets/imgs/friend_bg.jpg'
import { getFriendLinks, addFriendLinks } from '@/api/links'
import { Plus } from '@element-plus/icons-vue'
import Upload from '@/components/CommonUpload/upload.vue'
import type { UploadProps } from 'element-plus'
import { compressAccurately } from 'image-conversion'
import type { FormInstance, FormRules } from 'element-plus'
import Axios from 'axios'
const params = reactive({
  current: 1,
  size: 12,
  status: 2
})

const friendsList = ref([])
const _getFriendLinks = async () => {
  const res = await getFriendLinks(params)

  console.log(res)
  friendsList.value = res.list
}
onMounted(async () => {
  await _getFriendLinks()
})
const urlV = (rule: any, value: any, cb: any) => {
  const reg = new RegExp(
    /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/
  )
  if (!value) {
    return cb(new Error('请输入网站地址'))
  } else if (value && !reg.test(value)) {
    return cb(new Error('请输入正确的网站地址'))
  } else {
    cb()
  }
}
const formRef = ref<FormInstance>()
const form = reactive({
  site_name: '', // 网站名称
  site_desc: '', // 网站描述
  url: '', // 网址
  site_avatar: '', // 网站头像
  coverList: []
})
const activeName = ref('')
const primaryForm = reactive({ ...form })
const rules = reactive({
  site_name: [{ required: true, message: '请输入网站名称', trigger: 'blur' }],
  site_desc: [{ required: true, message: '请输入网站描述', trigger: 'blur' }],
  url: [{ required: true, validator: urlV, trigger: 'blur' }],
  coverList: [{ required: true, message: '请上传网站头像', trigger: 'blur' }]
})
const data = reactive({
  imgUrl: friend_bg,
  title: '友情链接',
  desc: '与 2 位博主共同进步',
  showBtn: true,
  apply: '+申请友链'
})

const dialogProps = reactive({
  dialogVisible: false
})
const onBtnClick = () => {
  /** 调起申请友联弹窗 */
  dialogProps.dialogVisible = true
}
// 图片压缩
const conversion = (file: any) => {
  return new Promise<Blob>((resolve) => {
    compressAccurately(file, 800).then((res: any) => {
      resolve(res)
    })
  })
}
/** 图片上传接口 */
const imgUpload = async (data: any) => {
  // 文件压缩 太大了上传不了，我的服务器比较垃圾
  let res
  // 没有raw.size 就表示已经压缩过了（多图片上传那里我压缩了一次） 有的话小于800不用压缩
  if (data.raw.size > 800) {
    const file = await conversion(data.raw)
    if (!file) {
      ElMessage.error('图片上传失败')
      return
    } else {
      res = file
    }
  } else {
    res = data.raw
  }
  const formData = new FormData()
  formData.append('file', res)
  // const token = getToken()

  return new Promise<any>((resolve) => {
    Axios({
      method: 'post',
      url: '/api/upload/img',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
        // Authorization: token.token
      }
    }).then((response) => {
      resolve(response.data)
    })
  })
}
// 图片上传
async function uploadCover() {
  if (!form.coverList[0].id) {
    const upLoadLoading = ElLoading.service({
      fullscreen: true,
      text: '图片上传中'
    })
    const res = await imgUpload(form.coverList[0])
    if (res.code == 0) {
      const { url } = res.result
      form.site_avatar = url
    }
    upLoadLoading.close()
  }
}

// 申请友链
const applayLinks = async () => {
  await formRef.value.validate(async (valid: boolean) => {
    if (valid) {
      await uploadCover()
      const res = await addFriendLinks(form)
      if (res) {
        ElNotification({
          offset: 60,
          title: '提示',
          message: h(
            'div',
            { style: 'color: #7ec050; font-weight: 600;' },
            '申请成功，等待博主审核通过'
          )
        })
        activeName.value = ''
        Object.assign(form, primaryForm)
      } else {
        ElNotification({
          offset: 60,
          title: '错误提示',
          message: h(
            'div',
            { style: 'color: #f56c6c; font-weight: 600;' },
            res.message
          )
        })
      }
    }
  })
}
const handleClose = () => {
  dialogProps.dialogVisible = false
}
const handleSubmit = async () => {
  formRef?.value?.validate(async (valid) => {
    if (valid) {
      await applayLinks()
      dialogProps.dialogVisible = false
    } else {
      return
    }
  })
}

const imageUrl = ref('')

const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}

const handleUploadChange = (file: any) => {
  console.log(file.File)
}
const toFriend = (url: string) => {
  window.open(url)
}
</script>

<template>
  <div class="friend">
    <CommonBg :data="data" @onBtnClick="onBtnClick" />

    <div class="list-wrap">
      <div
        v-for="(item, index) in friendsList"
        class="friend-item"
        @click="toFriend(item.url)"
      >
        <div class="avatar">
          <el-image
            style="width: 100%; height: 100%"
            :src="item.site_avatar"
            :fit="'fit'"
          >
            <template #error>
              <div class="image-slot">
                <el-icon><icon-picture /></el-icon>
              </div>
            </template>
          </el-image>
        </div>
        <div class="content">
          <div class="name">{{ item.site_name }}</div>
          <div class="desc">{{ item.site_desc }}</div>
        </div>
      </div>
    </div>
    <CommonDialog
      :="dialogProps"
      @handleClose="handleClose"
      @handleSubmit="handleSubmit"
    >
      <el-form
        class="apply-form"
        ref="formRef"
        :model="form"
        :rules="rules"
        label-width="100px"
        label-suffix=":"
      >
        <el-form-item label="网站名称" prop="site_name">
          <el-input
            v-model="form.site_name"
            :style="{ width: '220px' }"
            placeholder="请输入网站名称"
            clearable
          />
        </el-form-item>
        <el-form-item label="网站描述" prop="site_desc">
          <el-input
            type="textarea"
            v-model="form.site_desc"
            :style="{ width: '220px' }"
            maxlength="125"
            resize="none"
            :autosize="{ minRows: 2, maxRows: 3 }"
            show-word-limit
            placeholder="请输入网站描述"
            clearable
          />
        </el-form-item>
        <el-form-item label="网站地址" prop="url">
          <el-input
            v-model="form.url"
            :style="{ width: '220px' }"
            placeholder="请输入网站地址"
            clearable
          />
        </el-form-item>
        <el-form-item label="网站头像" prop="coverList">
          <Upload
            v-model:file-list="form.coverList"
            :width="260"
            :height="150"
            :limit="1"
          />
        </el-form-item>
      </el-form>
    </CommonDialog>
  </div>
</template>

<style scoped lang="scss">
.friend {
  .list-wrap {
    @include flex();
    padding: 10px;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 16px;

    .friend-item {
      @include flex();
      justify-content: flex-start;
      align-items: center;
      position: relative;
      @include background_color('background_color');
      @include font_color('text-color');
      border-radius: 10px;
      transition: var(--transition-normal);
      @include border('border');
      // @include cardShadow('shadow');
      box-shadow: var(--main-shadow);
      margin: 0 16px 16px 0;
      padding: 20px;
      width: 260px;
      height: 100px;
      background-image: url('@/assets/imgs/friend_bg.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      cursor: pointer;
      &:hover {
        background-color: var(--xy-main);
        color: #fff;
        .avatar {
          width: 0;
          height: 0;
          min-width: 0;

          min-height: 0;
          transition: var(--transition-normal);
        }
        .content {
          // @include font_color('text-color');
        }
      }
      .avatar {
        margin-right: 16px;
        width: 60px;
        min-width: 60px;
        height: 60px;
        min-height: 60px;
        border-radius: 10px;

        .el-image {
          border-radius: 50%;
        }
      }
      .content {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        .name {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 16px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .desc {
          font-size: 16px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .url {
          opacity: 1;
          text-decoration: dashed;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .friend {
    font-size: 18px;
    .list-wrap {
      margin-top: 16px;
      justify-content: space-around;
      .friend-item {
        margin-bottom: 16px;
        width: 150px !important;
        height: 60px !important;
        .name {
          font-size: 18px;
        }

        .desc {
          transform: translateY(10px);
          opacity: 1;
          width: 60%;
          font-size: 16px;
          overflow: hidden;
        }
        .url {
          opacity: 1;
          right: 10px;
          bottom: 10px;
          font-size: 20px;
        }
      }
    }
  }
}
</style>
