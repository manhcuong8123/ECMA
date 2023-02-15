//import {projectList} from '../../data/index'

import { router, useEffect } from "../../libs";

const AdminProjectsAddPage = () => {
    //kiểm tra trên localStorage có dữ liệu hay không, nếu có thfi lấy còn không thì gán vào mảng rỗng

    const projectList = JSON.parse(localStorage.getItem('projects')) || [];
    console.log(projectList);
  useEffect(()=>{
    const form = document.getElementById("form-add");
   // console.log(form);
    const projectName = document.querySelector('#projectName');
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      //tạo ra 1 object mưới lấy  từ form
      const newProject  ={
        id:projectList.length +1,
        name: projectName.value
      };
      // thêm vào mảng projectList
      projectList.push(newProject);

      // lưu vào localStorage dưới dạng chuỗi
      localStorage.setItem('projects',JSON.stringify(projectList));
      // điều hướng về trang project
      router.navigate('/admin/projects')
    })
  }, [])
  return `
   <div class = "container">
    <h1>THÊM DỰ ÁN</h1>
    <form  id="form-add">
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">@</span>
        <input type="text" id="projectName" class="form-control" placeholder="Fuckyou" aria-label="Username" aria-describedby="basic-addon1">
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Thêm dự án</button>
      </div>
    </form>
   </div>
   `
}
export default AdminProjectsAddPage;