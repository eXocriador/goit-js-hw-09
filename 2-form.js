import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const e={email:"",message:""},t=document.querySelector(".feedback-form");t.addEventListener("input",a=>{const{name:m,value:l}=a.target;e[m]=l.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e))});const s=localStorage.getItem("feedback-form-state");if(s){const a=JSON.parse(s);e.email=a.email||"",e.message=a.message||"",t.email.value=e.email,t.message.value=e.message}t.addEventListener("submit",a=>{if(a.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem("feedback-form-state"),t.reset(),e.email="",e.message=""});
//# sourceMappingURL=2-form.js.map
