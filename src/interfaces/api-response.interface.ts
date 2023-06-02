export interface ApiResponse {
  succes: boolean
  message: string
  data?: DataResponse
}
export interface DataResponse {
  limit: number
  rows: number
  totalRows: number
  data: any
}
export interface ApiLoginResponse {
  succes: boolean
  message: string
  data: DataLogin
}

export interface DataLogin {
  token: string,
  email: string
}