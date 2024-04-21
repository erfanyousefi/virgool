export enum BadRequestMessage {
    InValidLoginData = "اطلاعات ارسال شده برای ورود صحیح نمیباشد",
    InValidRegisterData = "اطلاعات ارسال شده برای ثبت نام صحیح نمیباشد",
    SomeThingWrong = "خطایی پیش آمده مجددا تلاش کنید",
    InvalidCategories = "دسته بندی ها را به درستی وارد کنید",
    AlreadyAccepted = "نظر انتخاب شده قبلا تایید شده است",
    AlreadyRejected= "نظر انتخاب شده قبلا رد شده است",
}
export enum AuthMessage {
    NotFoundAccount = "حساب کاربری یافت نشد",
    TryAgain = "دوباره تلاش کنید",
    AlreadyExistAccount = "حساب کاربری با این مشخصات قبلا وجود دارد",
    ExpiredCode="کد تایید منقصی شده مجددا تلاش کنید.",
    LoginAgain="مجددا وارد حساب کاربری خود شوید",
    LoginIsRequired="وارد حساب کاربری خود شوید",
    Blocked = "حساب کاربری شما مسدود میباشد، لطفا با پشتیبانی در ارتباط باشد"
}
export enum NotFoundMessage {
    NotFound = "موردی یافت نشد",
    NotFoundCategory = "دسته بندی یافت نشد",
    NotFoundPost = "مقاله ای یافت نشد",
    NotFoundUser = "کاربری یافت نشد",
}
export enum ValidationMessage {
    InvalidImageFormat = "فرمت تصریر انتخاب شده باید ار نوع jpg و png باشد",
    InvalidEmailFormat = "ایمیل وارد شده صحیح نمیباشد",
    InvalidPhoneFormat = "شماره موبایل وارد شده صحیح نمیباشد",
}
export enum PublicMessage {
    SentOtp = "کد یکبار مصرف با موفقیت ارسال شد",
    LoggedIn = "با موفقیت وارد حساب کاربری خود شدید",
    Created = "با موفقیت ایجاد شد",
    Deleted = "با موفقیت حذف شد",
    Updated = "با موفقیت به روز رسانی شد",
    Inserted = "با موفقیت درج شد",
    Like = "مقاله با موفقیت لایک شد",
    DisLike = "لایک شما از مقاله برداشته شد",
    Bookmark = "مقاله با موفقیت ذخیره شد",
    UnBookmark = " مقاله از لیست مقالات ذخیره شده برداشته شد",
    CreatedComment = " نظر شما با موفقیت ثبت شد",
    Followed = "با موفقیت دنبال شد",
    UnFollow = "از لیست دنبال شوندگان حذف شد",
    Blocked = "حساب کاربری با موفقیت مسدود شد",
    UnBlocked = "حساب کاربری از حالت مسدود خارج شد",
}
export enum ConflictMessage {
    CategoryTitle = "عنوان دسته بندی قبلا ثبت شده است",
    Email = "ایمیل توسط شخص دیگری استفاده شده",
    Phone = "موبایل توسط شخص دیگری استفاده شده",
    Username = "تام کاربری توسط شخص دیگری استفاده شده",
}