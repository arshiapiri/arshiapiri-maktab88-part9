const userListContainer = document.getElementById('usersList');
const userProfileModalTitle = document.getElementById('userProfileModalTitle');
const userProfileModalBody = document.getElementById('userProfileModalBody');
const paginationContainer = document.getElementById('paginationContainer');

const  pageDeactive= 'page-link bg-white border-dark text-dark';
const pageActive = 'page-link bg-primary border-dark text-dark';

let newUserData = userData;
let selectedUser = null;

const GenerateProfileInformation = ({id, email,avatar,firstname,lastname},showPara = false) => {
    return `
    <ul class="list-group list-group-flush my-4">
        <img src="${avatar}" class="card-img-top p-2 rounded-4" alt='${id}'>
        <h5 class="list-group-item"><i class="fa-solid fa-user"></i> ${firstname} ${lastname}</h5>
        ${showPara ? '' :  `<p class="list-group-item">${firstname} ${lastname} is Maktab 45 user by UID of ${id}, you can 
            easily get in touch with ${firstname} form <br>
             <span class="text-primary"><a>${email}</a></span>
            </p>`}
            <li class="list-group-item"> <i class="fa fa-id-card"></i> ${id}</li>
            <li class="list-group-item"><i class="fa-solid fa-envelope"></i> ${email}</li>
    </ul>
    `
    }

      const showModalInformation = ({ firstname,...params}) => {
        const title = `${firstname} Profile`;
        userProfileModalTitle.innerText = title;
    
        const profileInfo = GenerateProfileInformation({firstname,...params },true);
        userProfileModalBody.innerHTML = profileInfo;
    }

const cardGenerator = ({id, firstname, lastname, email, avatar}) => {
    return `            
    <div class="col-lg-4 col-md-6 col-12">
    <div class="card shadow">
        <div class="card-body">
            ${GenerateProfileInformation({id, email, avatar,firstname,lastname})}
            <button onclick = 'handelOnClickProfileBtn(${id})' class="btn btn-primary w-100 rounded-3"
            data-bs-toggle="modal" data-bs-target="#userDataList"
            >
            profile
            </button>
        </div>
    </div>
</div>
`
}

const handelOnClickProfileBtn = (id) => {
    const targetUser = userData.find(el => el.id === id);
    showModalInformation(targetUser);
}

const usersListGenerator = (index, data) => {
    let usersListBody = "";
  
    for (let i = index; i < index + 6; i++) {
      if (!data[i]) {
        break;
      }
      usersListBody += cardGenerator(data[i]);
    }
    return usersListBody;
  };
  
  const renderUsersList = (index, data) => {
    userListContainer.innerHTML = usersListGenerator(index, data);
  };
  
  renderUsersList(0, newUserData);
  
  /********************************************** */
  /*********** Pagination Start *********** */
  
  // Generate Pagination
  const paginationGenerator = (data) => {
    let paginationBody = "";
    const pageCount = Math.ceil(data.length / 6);
    let startIndex = 0;
    for (let i = 0; i < pageCount; i++) {
      paginationBody += `
      <li class="page-item">
        <a
        class="page-link bg-white border-primary text-dark" 
          href="#"
          onclick="pageRender(${startIndex},this)"
          >${i + 1}</a
        >
      </li>`;
      startIndex += 6;
    }
    return paginationBody;
  };
  
  // Render Pagination
  const renderPagination = (data) => {
    paginationContainer.innerHTML = paginationGenerator(data);
    document.querySelectorAll(".page-link")[0].classList = pageActive;
  };
  
  renderPagination(newUserData);
  
  // Render Page
  
  const pageRender = function (index, self) {
    let pageBtns = document.querySelectorAll(".page-link");
    for (const btn of pageBtns) {
      btn.className = pageDeactive;
    }
    self.className = pageActive;
    renderUsersList(index, newUserData);
  };
  
  /***********************************
   * Filter Users
   */
  
  const filterUsers = function (self) {
    const searchKey = self.value.toUpperCase();
    newUserData = userData.filter((item) => {
      for (const value of Object.values(item)) {
        if (value.toString().toUpperCase().indexOf(searchKey) > -1) {
          return true;
        }
      }
    });
    renderUsersList(0, newUserData);
    renderPagination(newUserData);
  };




