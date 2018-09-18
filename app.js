const employeeList = [{
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },

  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];

const toggleShow = function(sel) {
  $('#default').removeClass('show');
  $('#verifyme').removeClass('show');
  $('#lookupme').removeClass('show');
  $('#containsme').removeClass('show');
  $('#deleteme').removeClass('show');
  $('#addme').removeClass('show');
  $('#updateme').removeClass('show');
  $('#printme').removeClass('show');
  $('main').addClass('dark-layer');
  $(sel).addClass('show');
};

const printOn = (e) => {
  e.preventDefault();
  $('#content').empty();
  toggleShow('#printme');
};

const verifyOn = (e) => {
  e.preventDefault();
  $('#content').empty();
  toggleShow('#verifyme');
};

const lookupOn = (e) => {
  e.preventDefault();
  $('#content').empty();
  toggleShow('#lookupme');
};

const addOn = (e) => {
  e.preventDefault();
  $('#content').empty();
  toggleShow('#addme');
};

const updateOn = (e) => {
  e.preventDefault();
  $('#content').empty();
  toggleShow('#updateme');
};

const deleteOn = (e) => {
  e.preventDefault();
  $('#content').empty();
  toggleShow('#deleteme');
};

const containsOn = (e) => {
  e.preventDefault();
  $('#content').empty();
  toggleShow('#containsme');
};

$('#print').on('click', printOn);
$('#verify').on('click', verifyOn);
$('#lookup').on('click', lookupOn);
$('#add').on('click', addOn);
$('#contains').on('click', containsOn);
$('#update').on('click', updateOn);
$('#delete').on('click', deleteOn);

$('#print').on('click', function (e) {
  e.preventDefault();
    renderEmployeeList('div');
});

const LookupIn = function (e) {
  e.preventDefault();
  let LookupName = $('#lookupInput').val();
  let lookupok = employeeList.filter(e => e.name === LookupName);
  lookupok.forEach(e => {
    $('#content').append(`${e.name} ${e.officeNum} ${e.phoneNum}`)
  })
  $('#lookupInput').val(null);
};

$('#submitLookup').on('click', LookupIn);

const containsIn = function (e) {
  e.preventDefault();
  let containsInfo = $('#containsInput').val();
  let contained = employeeList.filter(e => e.name.toLowerCase().includes(containsInfo));
  contained.forEach(e => {
    $('#content').append(`${e.name} ${e.officeNum} ${e.phoneNum}`)
  })
  $('#containsInput').val(null);
}

$('#submitContains').on('click', containsIn);

const updateIn = function (e) {
  e.preventDefault();

  let eName = $('#updateInput').val();
  let newOfficeNumber = $('#updateInput2').val();
  let newPhoneNumber = $('#updateInput3').val();
  let newNumber = newOfficeNumber || newPhoneNumber;
  if (newNumber === newOfficeNumber) {
     newOfficeNumber = $('#updateInput2').val();
     employeeList.forEach(e => {
          if (e.name === eName) {
            e.officeNum = newOfficeNumber;
            $('#content').append(`${e.name} ${e.officeNum} ${e.phoneNum}`);
          };
     });
    
  } else if (newNumber === newPhoneNumber) {
  newPhoneNumber = $('#updateInput3').val();

    employeeList.forEach(e => {
          if (e.name === eName) {
            e.phoneNum = newPhoneNumber; 
          $('#content').append(`${e.name} ${e.officeNum} ${e.phoneNum}`);
          };
    });
}
  $('#updateInput').val(null);
  $('#updateInput2').val(null);
  $('#updateInput3').val(null);
}

$('#submitUpdate').on('click', updateIn);

const addIn = function (e) {
  e.preventDefault();
  let addName = $('#addInput').val();
  let addOffice = $('#addInput2').val();
  let addTele = $('#addInput3').val();
  let addedEmployee = {
    name: addName,
    officeNum: addOffice,
    phoneNum: addTele
  };
  employeeList.push(addedEmployee);
  renderEmployeeList('div');
  
  $('#addInput').val(null);
  $('#addInput2').val(null);
  $('#addInput3').val(null);
}

function renderEmployeeList (ele){
  employeeList.forEach(e => {
    let element = document.createElement(ele);
    let content = `${e.name} ${e.officeNum} ${e.phoneNum}`
    element.textContent = content;
    
    document.getElementById('content').appendChild(element);
  })
}

$('#submitAdd').on('click', addIn);


const deleteIn = function (e) {
  e.preventDefault();
  deleteInfo = $('#deleteInput').val();
  employeeList.forEach((e , i )=> {
    if(deleteInfo === e.name){
      employeeList.splice(i, 1);
      renderEmployeeList('div')
    }
  })
  $('#deleteInput').val(null);
};
$('#submitDelete').on('click', deleteIn);

const verifyIn = function (e) {
  e.preventDefault();
  let msg = 'Employee Not Found';
  $('#verifyInput').empty();
  verifyInfo = $('#verifyInput').val();
  employeeList.forEach(e => {
    if (verifyInfo === e.name) {
      msg = 'Employee Found';
    }
  });

    $('#content').text(msg);
  $('#verifyInput').val(null);
};

$('#submitVerify').on('click', verifyIn);