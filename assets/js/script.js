const accountList = [
    {
        email: "abc@gmail.com",
        password: "1234dv",
    },
    {
        email: "bcd@gmail.com",
        password: "1234h",
    },
    {
        email: "123@gmail.com",
        password: "1234k",
    },
    {
        email: "hello@gmail.com",
        password: "1234",
    },
    {
        email: "hi@gmail.com",
        password: "1234f",
    },
    {
        email: "xyz@gmail.com",
        password: "1234",
    },
    {
        email: "ManchesterIsBlue@gmail.com",
        password: "MC6-3MU",
    },
];

const emailIn = document.querySelector("#emailInput");
const passwordIn = document.querySelector("#passwordInput");
const loginAction = document.querySelector(".login__now");
const loginGoogle = document.querySelector(".login__google");
// console.log(emailIn)
// console.log(passwordIn)

let check = 0;
let checkEmail = 0;
let checkdb = 0;

loginAction.addEventListener("click", function () {
    if (emailIn.value === "" && passwordIn.value === "") {
        alert("Vui long nhap tai khoan va mat khau");
    } else if (emailIn.value !== "" && passwordIn.value === "") {
        alert("Mat khau khong duoc de trong");
    } else if (emailIn.value === "" && passwordIn.value !== "") {
        alert("Tai khoan khong duoc de trong");
    } else if (emailIn.value !== "" && passwordIn.value !== "") {
        accountList.forEach(function (account) {
            if (emailIn.value === account.email) {
                var noti = document.querySelector(".notify");
                noti.style.display = "block";
                noti.innerHTML = "Tai khoan dung";
                noti.style.color = "green";
                checkEmail = 1;
                if (passwordIn.value === account.password) {
                    check = 1;
                    alert("Dang nhap thanh cong");
                    window.location.href =
                        "https://www.facebook.com/campaign/landing.php?&campaign_id=1661697988&extra_1=s%7Cc%7C515923224890%7Ce%7Cfb%7C&placement=&creative=515923224890&keyword=fb&partner_id=googlesem&extra_2=campaignid%3D1661697988%26adgroupid%3D65157402478%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-143742855%26loc_physical_ms%3D9040346%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=EAIaIQobChMIj4XJvOW79gIV0qqWCh1buwNgEAAYASAAEgKkDfD_BwE";
                }
            }
        });

        if (checkEmail == 0) {
            // emailIn.value = "";
            let noti = document.querySelector(".notify");
            noti.style.display = "block";
            noti.innerHTML = "Tai khoan sai";
            noti.style.color = "red";
            // alert("Tai khoan khong ton tai");
            passwordIn.value = "";
            checkdb = 1;
        } else {
            checkEmail = 0;
            // noti.style.display = "none";
        }

        if (check == 0 && checkdb == 0) {
            passwordIn.value = "";
            alert("Vui long nhap lai mat khau");
        } else {
            check = 0;
        }
        checkdb = 0;
    }
});

loginGoogle.addEventListener("click", function () {
    window.open(
        "https://myaccount.google.com/?utm_source=chrome-profile-chooser&pli=1",
        "_blank"
    );
});
