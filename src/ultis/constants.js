export const TABLE = {
  USER: 'user',
  ACCOUNT: 'account',
}

export const REGEX = {
  username: {
    regex: /^[a-z_\d]{6,255}$/i,
    error: 'Tên tài khoản chỉ bao gồm chữ cái, chữ số, dấu _, độ dài tối thiểu là 6 kí tự',
  },
  password: {
    regex: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*+='"<>\]\[\|-]).{8,}$/i,
    error: 'Mật khẩu cần tối thiểu 8 ký tự, ít nhất 1 chữ cái viết hoa, 1 chữ cái viết thường và 1 số',
  },
}

export const ERROR = {
  default: `Có lỗi xảy ra, vui lòng thử lại!`,
}

export class MyError extends Error {
  constructor(message, code) {
    super(message);
    this.name = "MyError";
    this.code = code || 400;
  }
}