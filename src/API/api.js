import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const url = "http://82.144.203.3:5000/";

export const sendCod = (phone, setStep) => {
    axios.post(`${url}api/auth/post/user/phone`,
    {phone: phone}).then((res) => {
        if (res.status === 200) {
            setStep(1)
        } else {
            toast.error('Щось пішло не так')
        }
    })
}

export const sendProv = (phone, code, setStep) => {
    axios.post(`${url}api/auth/post/checkphonecode`,
    {
        phone: phone,
        code: code
    }).then((res) => {
        if (res.data.result) {
            setStep(2)
        } else {
            toast.error('Код авторизації не вірний', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })
        }
    })
}

export const createRegister = (phone, email, typeAccount, pib,setStep) => {
    axios.post(`${url}api/auth/register`,
    {
        email: email,
        phone: phone,
        typeAccount: typeAccount,
        pib: pib
    }).then((res) => {
        console.log(res.data.data)
        if (res.status === 200) {
            localStorage.setItem("userMove", JSON.stringify({token : res.data.token, phone : `+38${phone}`}))
            setStep(3)
        } else {
            toast.error('Деякі поля не заповнені', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })
        }
    })
}

export const createBusinesRegister = (phone, email, typeAccount, busName, setStep, codeEdrpou) => {
    axios.post(`${url}api/auth/register`, 
    {
        email: email,
        phone: phone,
        typeAccount: typeAccount,
        nameCompany: busName,
        edrpuo: codeEdrpou,
    }).then((res) => {
        if (res.status === 200) {
            localStorage.setItem("userMove", JSON.stringify({token : res.data.token, phone : `+38${phone}`}))
            setStep(3)
        } else {
            toast.error('Деякі поля не заповнені', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })
        }
    })
}

export const faq = (setFaq) => {
    axios.get(`${url}api/get/faq`).then((res) => {
        setFaq(res.data.data)
    })
}

export const oblasts = (setOblast) => {
    axios.get(`${url}api/get/oblast`).then((res) => {
        setOblast(res.data.data)
    })
}

export const templates = (setTemplate) => {
    axios.get(`${url}api/get/templates/user`).then((res) => {
        //setTemplate(res.data.data)
        if(res.data.data !== undefined){
            const arr = []
            const emptyValue = {value: ''}
            const emptyBool = {value: false}
            const emptyNum = {value: 0}
            const emptyProduct = {value: 'Зерно'}
            const emptyDate = {value: 100}
            const editDataContent = res.data.data.map((el) => el.content.map((result) => 
                result.type === 'int'?
                    Object.assign(result, emptyNum)
                : result.type === 'bool' ?
                    Object.assign(result, emptyBool) 
                : result.type === "categoryProduction" ?
                    Object.assign(result, emptyProduct)
                : result.type === "date.now" ?
                    Object.assign(result, emptyDate)
                : Object.assign(result, emptyValue) 
            ))
            const editData = res.data.data.map((item,key) => arr.push({
                category: item.category,
                content: editDataContent[key]
            })) 
            
            setTemplate(arr)
        }
    })
}

export const image = (image) => {
    const formData = new FormData()
    for(let i =0; i < image.length; i++) {
            formData.append("image", image[i]);
    }
    axios.post(`${url}upload`,formData).then((res)=> {
    })
}

export const solutionApi = (setSolution) => {
    axios.get(`${url}api/get/solution`).then((res)=>{
        setSolution(res.data.data)
    })
}

export const sendWarhouse = (title, opesanie, umovi, contant, token, file) => {
    const bodyFormData = new FormData();
    bodyFormData.append('title' , title);
    bodyFormData.append('description' , opesanie);
    bodyFormData.append('umovi' , umovi);
    bodyFormData.append('content' ,JSON.stringify(contant));
    bodyFormData.append('file' , file);
    axios({
        method: "post",
        url: 'http://82.144.203.3:5000/api/post/stocks',
        data: bodyFormData,
        headers: { 
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${token}`
        },
        }).then((res)=> {})
}

export const sendTransport = (title, opesanie, umovi, contant, token, file) => {
    const bodyFormData = new FormData();
    bodyFormData.append('title' , title);
    bodyFormData.append('description' , opesanie);
    bodyFormData.append('umovi' , umovi);
    bodyFormData.append('content' ,JSON.stringify(contant));
    bodyFormData.append('file' , file);
    axios({
        method: "post",
        url: 'http://82.144.203.3:5000/api/post/deliveries/create',
        data: bodyFormData,
        headers: { 
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${token}`
        },
      }).then((res)=> {
      })
}

export const sendTehnika = (title, opesanie, umovi, contant, token, file) => {
    const bodyFormData = new FormData();
    bodyFormData.append('title' , title);
    bodyFormData.append('description' , opesanie);
    bodyFormData.append('umovi' , umovi);
    bodyFormData.append('content' ,JSON.stringify(contant));
    bodyFormData.append('file' , file);
    axios({
        method: "post",
        url: 'http://82.144.203.3:5000/api/post/mechanisms/create',
        data: bodyFormData,
        headers: { 
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${token}`
        },
      }).then((res)=> {
      })
}

export const sendProduction = (title, opesanie, umovi, contant, token, file) => {
    const bodyFormData = new FormData();
    bodyFormData.append('title' , title);
    bodyFormData.append('description' , opesanie);
    bodyFormData.append('umovi' , umovi);
    bodyFormData.append('content' ,JSON.stringify(contant));
    bodyFormData.append('file' , file);
    axios({
        method: "post",
        url: 'http://82.144.203.3:5000/api/post/production/create',
        data: bodyFormData,
        headers: { 
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${token}`
        },
      }).then((res)=> {
      })
}

export const warhouseGet = (setWarhouse) => {
    axios.get(`${url}api/get/stocks`).then((res) => {
        if (res.status === 200) {setWarhouse(res.data.data)}
       
    })
}

export const transportGet = (setTransport) => {
    axios.get(`${url}api/get/deliveries`).then((res) => {
        if (res.status === 200) {setTransport(res.data.data)}
       
    })
}

export const tehnikaGet = (setTehnika) => {
    axios.get(`${url}api/get/mechanisms`).then((res) => {
        if (res.status === 200) {setTehnika(res.data.data)}
    })
}

export const productionGet = (setProduction) => {
    axios.get(`${url}api/get/production/`).then((res) => {
        if (res.status === 200) {setProduction(res.data.data)}
    })
}

export const addPost = (id, setAddPostInformation) => {
    axios({
        method: "post",
        url: `${url}api/auth/post/add/info`, 
        data: {
            id: id
        },
        category: ""
    }).then((res) => {
        if (res.status === 200) {
            setAddPostInformation(res.data)
        }
    })
}

export const addToRating = (id, token, category) => {
    axios({
        method: "post",
        url: `${url}api/auth/post/rating/create`, 
        data: {
            id: id,
            category: category,
        },
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }).then((res) => {
    })
}

export const getToRating = (setRatingList, token) => {
    axios({
        method: "get",
        url: `${url}api/auth/get/rating`, 
        headers: {"Authorization": `Bearer ${JSON.parse(localStorage.getItem("userMove")) !== null ? JSON.parse(localStorage.getItem("userMove")).token : ''}`},
    }).then((res) => {
        setRatingList(res.data)
    })
}

export const myAdd = (token, setMyAdd) => {
    axios({
        method: "post",
        url: `${url}api/auth/post/my-add`,
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }).then((res) => {
        setMyAdd(res.data.data)
    })
}

export const createGroup = (token, userPhone, history) => {
    axios({
        method: 'post', 
        url: `${url}api/post/chat/create-group`,
        data: {
            "listGroup": [
                userPhone
            ]
        },
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }).then((res) => {
        if (res.data.data === 200) {
            history('/chat')
        }
    })
}

export const chatList = (token, setListFriend) => {
    axios({
        method: 'get', 
        url: `${url}api/get/chat/friends`,
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }).then((res) => {
        setListFriend(res.data.data)
    })
}

export const sendMess = (token, chatId, value, setRerender,rerender) => {
    axios({
        method: 'post', 
        url: `${url}api/post/chat/send-message`,
        data: {
            id_chat: chatId,
            message: value,
        },
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }).then((res) => {
        console.log(res.data.data)
        if (res.data.data === 200) {
            setRerender(!rerender)
        } 
    })
}

export const prodCategory = (setProduction, token) => {
    axios({
        method: 'get',
        url: `${url}api/get/catalog`,
        headers:{"Authorization": `Bearer ${token}`}
    }).then((res) => {
        setProduction(res.data.data)
    })
}

export const delitePost = (token, id) => {
    axios({
        method:'post',
        url: `${url}api/auth/post/add/delete`,
        data: {
            idAdd: id,
        },
        headers:{"Authorization": `Bearer ${token}`}
    }).then((res) => {
        console.log(res.data.data)
    })
}

export const takeReklama = (token,setReklamaList) => {
    axios({
        method: 'get',
        url: `${url}api/get/reklama`,
        headers:{"Authorization": `Bearer ${token}`}
    }).then((res) => {
        setReklamaList(res.data.data)
    })
}
