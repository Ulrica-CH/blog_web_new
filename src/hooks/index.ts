/** 公用hooks */
export function useLoading(emits: any) {
  const changeLoadingStatus = (flag: boolean) => {
    emits('onChangeLoading', flag)
  }

  return [changeLoadingStatus]
}


export * from './changeTheme'