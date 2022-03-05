function getSize()
{
    return document.getElementById('slider').value;
}
function getMeet()
{
    var toppings = document.getElementById("meat").getElementsByTagName("input");
    var checked_meat = [];
    for (let j = 0; j < toppings.length; j++) 
    {
        if (toppings[j].checked) 
        {
            checked_meat.push(toppings[j].name); 
        } 
    }
    return checked_meat
}
function getVeg() 
{
    var veg = document.getElementById("vegetables").getElementsByTagName("input");
    var checked_veg = [];
    

    for (let i = 0; i < veg.length; i++) 
    {
        if (veg[i].checked) 
        {
            checked_veg.push(veg[i].name); 
        } 
    }
    return checked_veg
}
function getCheese() 
{
    var cheese_=null;
    var isCheese = document.getElementById("cheese").getElementsByTagName("input")

    for (let j = 0; j < isCheese.length; j++) 
    {
        if (isCheese[j].value == "Regular Cheese") 
        {
            cheese_= 1
        }
        else if (isCheese[j].value == "No Cheese") 
        {
            cheese_= 2
        }
        else if (isCheese[j].value == "Extra Cheese") 
        {
            cheese_= 3
        }
    }
    return cheese_;
}
function ChangePizzaSize() 
{
    var rangeNum = getSize();
    var PizzaSize = document.getElementById("prop");
    var PizzaImg = document.getElementById("Psize");

    if (rangeNum === "1") 
    {
        PizzaSize.textContent = "Small " + "6" + "$";
        PizzaImg.style.width = "100px";
        PizzaImg.style.height = "100px";
    } 
    else if (rangeNum === "2") 
    {
        PizzaSize.textContent = "Medium " + "10" + "$";
        PizzaImg.style.width = "150px";
        PizzaImg.style.height = "150px";
    } 
    else if (rangeNum === "3") 
    {
        PizzaSize.textContent = "Large " + "14" + "$";
        PizzaImg.style.width = "200px";
        PizzaImg.style.height = "200px";
    } 
    else if (rangeNum === "4") 
    {
        PizzaSize.textContent = "X-Large " + "16" + "$";
        PizzaImg.style.width = "250px";
        PizzaImg.style.height = "250px";
    } 
}
function calculateTotal() 
{
    var price = null;
    var rangeNum = getSize();
    if (rangeNum === "1") 
    {
        price = 6;
    }
    else if (rangeNum === '2') 
    {
        price = 10;
    }
    else if (rangeNum === '3') 
    {
        price = 14;
    }
    else if (rangeNum === '4') 
    {
        price = 16;
    }

    var cheese = null;

    if (getCheese() == 3) 
    {
        cheese = 3;
    }
    
    return price + 2*getMeet().length + getVeg().length + cheese;
}
function PizzaSize() {
    var slidervalue = getSize();
    var pizzaSize = null;

    if (slidervalue == "1") {
        pizzaSize = "Small";
    }
    else if (slidervalue == "2") {
        pizzaSize = "Medium";
    }
    else if (slidervalue == "3") {
        pizzaSize = "Large";
    }
    else if (slidervalue == "4") {
        pizzaSize = "X-Large";
    }
    return pizzaSize
}

function fillSummary() 
{
    var Summary = document.getElementById("dlvrTo");
    var first_name = document.getElementById("fname");
    var last_name = document.getElementById("lname");
    var email = document.getElementById("email");
    var phone_number = document.getElementById("phone");
    var city = document.getElementById("city");
    var address = document.getElementById("adress");

    Summary.textContent = first_name.value + ' ' + last_name.value + ', ' + email.value + ', ' + phone_number.value + ', ' + city.value + '-' + address.value;

    var orderList = document.getElementById("orderList");
    orderList.innerHTML = ""
    let listt = document.createElement("li");
    listt.appendChild(document.createTextNode('-' + PizzaSize() + ' size'))
    orderList.append(listt);

    var order_info = [];
    order_info = order_info.concat(getMeet());
    order_info = order_info.concat(getVeg());
    order_info = order_info.concat(getCheeseName());
    
    for (let i = 0; i < order_info.length; i++) {
        listt = document.createElement("li");
        listt.appendChild(document.createTextNode(order_info[i]));
        orderList.appendChild(listt);
    }

    var total = document.getElementById('total');
    total.innerHTML = 'Total: ' + calculateTotal() + ' $';
}
function getCheeseName() {
    var cheese_type = document.getElementById("cheese").getElementsByTagName("input")
    var cheesevalue = null;
    for (let i = 0; i < cheese_type.length; i++) {
        if (cheese_type[i].checked) {
            cheesevalue = cheese_type[i].value
        }
    }
    return cheesevalue;
}

function gotoPage(page) {
    if (page == "ex1") {
        document.getElementById("ex1").style.display="inherit";
        document.getElementById("ex2").style.display="none";
        document.getElementById("OrderSummary").style.display="none";
        document.body.style.backgroundColor = "#01dddd";
    }
    if (page == "ex2") {
        document.getElementById("ex1").style.display="none";
        document.getElementById("ex2").style.display="inherit";
        document.getElementById("OrderSummary").style.display="none";
        document.body.style.backgroundColor = "#e93a57";
    }
    if (page == "ordersummary") {
        if (checkInfo() == true) {
            document.getElementById("ex1").style.display="none";
            document.getElementById("ex2").style.display="none";
            document.getElementById("OrderSummary").style.display="inherit";
            document.body.style.backgroundColor = "#3fc38e";
        } 
        else if (checkInfo() == false) {
            alert("Please fill all fields!!!")
        }
    }
}

function checkInfo() {
    var complete = document.getElementById("ex2").getElementsByClassName("required");
    for (let i = 0; i < complete.length; i++) {
      if (complete[i].value == "") 
        return false;
    }
    return true;
}
