(function () {
    let submitButton = document.getElementById('order-submit');
    submitButton.addEventListener('click', checkOpportunityOrder);

function checkOpportunityOrder() {

    let formServices = $("#form-services option:selected").text();
    let vidAuto = $("#vid-auto option:selected").text();
    let date = document.getElementById('date');
    let time = $("#time option:selected").text();
    let number = document.getElementById('number');
    let name = document.getElementById('name');
    let formComments = document.getElementById('form-comments');
    if (formServices === "" || vidAuto === "" ||
        date.value === "" || time === "" || number.value === "" || name.value === "") {
        $('#form-order-services').validate({
            rules: {
                formServices: {
                    required: true
                },
                vidAuto: {
                    required: true
                },
                date: {
                    required: true,
                    date: true
                },
                time: {
                    required: true
                },
                number: {
                    required: true,
                    number: true
                },
                name: {
                    required: true,
                    rangelength: [3, 18]
                }
            }
        });
    }
    else
        {
            let date = document.getElementById('date');
            let time = $("#time option:selected").text();
            let opportunity = new Opportunity(date.value, time);
            checkTime(opportunity);
        }
}

class Opportunity {
    constructor(date, time) {
        this.date = date;
        this.time = time;
    }
}

function checkTime(opportunity) {
    $.ajax({
        type: 'POST',
        url: '/check-time',
        headers: {
            'Accept': 'application/text',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(opportunity),
        dataType: 'text',
        success: function (receive) {
            checkResponse(receive);
        },
        error: function () {
            alert('Error getting response from BE');
        }
    });
}
function checkResponse(responseBE) {
    console.log(responseBE);
    if (responseBE === 'Yes') {
        getData(event);
    }
    else {
        alert('Время занято');
    }
}
function getData() {

    let formServices = $("#form-services option:selected").text();
    let vidAuto = $("#vid-auto option:selected").text();
    let date = document.getElementById('date');
    let time = $("#time option:selected").text();
    let number = document.getElementById('number');
    let name = document.getElementById('name');
    let formComments = document.getElementById('form-comments');
    if (formServices === "" || vidAuto === "" ||
        date.value === "" || time === "" || number.value === "" || name.value === "") {
        $('#form-order-services').validate({
            rules: {
                formServices: {
                    required: true
                },
                vidAuto: {
                    required: true
                },
                date: {
                    required: true,
                    date: true
                },
                time: {
                    required: true
                },
                number: {
                    required: true,
                    number: true
                },
                name: {
                    required: true,
                    rangelength: [3, 18]
                }
            }
        });
    }
    else {
        let order = new Order(formServices, vidAuto, date.value, time, number.value, name.value, formComments.value);
        sendData(order);
    }
}
class Order {
    constructor(formServices, vidAuto, date, time, number, name, formComments) {
        this.formSevices = formServices;
        this.vidAuto = vidAuto;
        this.date = date;
        this.time = time;
        this.number = number;
        this.name = name;
        this.formComments = formComments;
    }
}

function sendData(order) {
    $.ajax({
        type: 'POST',
        url: '/orders',
        headers: {
            'Accept': 'application/text',
            'Content-Type': 'application/json'
        },
        dataType: 'text',
        data: JSON.stringify(order),
        success: function (receive) {
            alert('Successful added order');
            $("#form-order-services").empty();
            $("#form-order-main").text(receive);
        },
        error: function () {
            alert('Error updated hotel');
        }
    });
}

$('.open-popap').magnificPopup();
$('.order').magnificPopup();
$('.popapComment').magnificPopup();

function checkCall(call) {
    $.ajax({
        type: 'GET',
        url: '/check-call/' + call,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        dataType: 'text',
        success: function(responseBECall) {
            checkResponseCall(responseBECall);
        },
        error: function() {
            alert('Error getting responseBECall');
        }
    });
}
function checkResponseCall(responseBECall) {
    if(responseBECall === 'success') {
        getCall();
    }
    else {
        alert('call ЗАНЯТО');
    }
}
function getCall() {
    let zvName = document.getElementById('zv-name');
    let zvNumber = document.getElementById('zv-number');
    if (zvName === "" || zvNumber === "") {
        $('#form-order').validate({
            rules:{
                zvName: {
                    required: true,
                    rangelength: [3, 18]
                },
                zvNumber: {
                    required: true,
                    number: true
                }
            }
        });
    }
    else {
        let orderCall = new OrderCall(zvName.value, zvNumber.value);
        sendCall(orderCall);
    }
}
class OrderCall {
    constructor(zvName, zvNumber) {
        this.zvName = zvName;
        this.zvNumber = zvNumber;
    }
}
function sendCall(orderCall) {
    $.ajax({
        type: 'POST',
        url: '/ordersCall',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        dataType: 'text',
        data: JSON.stringify(orderCall),
        success: function(receiveCall) {
            $("#form-order").empty();
            $("#aaa").text(receiveCall);
        },
        error: function() {
            alert('Error updated moika');
        }
    });
}

function checkReviews(reviews) {
    $.ajax({
        type: 'GET',
        url: '/check-reviews/' + reviews,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        dataType: 'text',
        success: function(responseBEReviews) {
            checkResponseReviews(responseBEReviews);
        },
        error: function() {
            alert('Error getting responseBEReviews');
        }
    });
}
function checkResponseReviews(responseBEReviews) {
    if(responseBEReviews === 'success') {
        getReviews();
    }
    else {
        alert('reviews ЗАНЯТО');
    }
}
function getReviews() {
    let contactName = document.getElementById('contactName');
    let contactNumber = document.getElementById('contactNumber');
    let contactMessage = document.getElementById('contactMessage');
    if (contactName === "" || contactNumber === "" || contactMessage === "") {
        $('#contactForm').validate({
            rules:{
                contactName: {
                    required: true,
                    rangelength: [3, 20]
                },
                contactNumber: {
                    required: true,
                    number: true
                },
                contactMessage: {
                    required: true
                }
            }
        });
    }
    else {
        let orderReviews = new OrderReviews(contactName.value, contactNumber.value, contactMessage.value);
        sendReviews(orderReviews);
    }
}
class OrderReviews {
    constructor(contactName, contactNumber, contactMessage) {
        this.contactName = contactName;
        this.contactNumber = contactNumber;
        this.contactMessage = contactMessage;
    }
}
function sendReviews(orderReviews) {
    $.ajax({
        type: 'POST',
        url: '/ordersReviews',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        dataType: 'text',
        data: JSON.stringify(orderReviews),
        success: function(receiveReviews) {
            $("#contactForm").empty();
            $("#col-contact").text(receiveReviews);
        },
        error: function() {
            alert('Error updated moika');
        }
    });
}

})();