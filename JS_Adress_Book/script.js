//javascript.info

function Contact(id, first_name, last_Name, email) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_Name;
    this.email = email;
}

function AddressBook() {
    var contact = [];
    var index = 1;

    var form = document.getElementById("contacts-form");
    var table = document.getElementById("contacts-table");
    var save = document.getElementById("contacts-op-save");
    var discard = document.getElementById("contacts-op-discard");

    this.init = function () {
        var self = this;
        console.log(self);
        form.addEventListener("submit", function(e){
            e.preventDefault();
            
            var name = this.first_name.value;
            var lastName = this.last_name.value;
            var email = this.email.value;
            var id = index;

            var contact = new Contact (id, name,lastName,email);
            

            self.addRow(contact);
            this.reset();
            index++;
            


        });

        discard.addEventListener("click", function(){
            form.reset();
        }
        )};
    this.addRow = function(contact){
        var tr = document.createElement("tr");
        var attr = document.createAttribute("id");
        attr.value = "row-"+contact.id;

        tr.setAttributeNode(attr);

        var td = document.createElement("td");
        td.textContent = contact.id;
        tr.appendChild(td);

        
        var td1 = document.createElement("td");
        td1.textContent = contact.first_name;
        tr.appendChild(td1);

        var td2 = document.createElement("td");
        td2.textContent = contact.last_name;
        tr.appendChild(td2);

        var td3 = document.createElement("td");
        td3.textContent = contact.email;
        tr.appendChild(td3);

        var td4 = document.createElement("td");
        td4.innerHTML = `<a href='#'>edit</a> | 
        <a href='#' data-id= '${contact.id}' id='delete-${contact.id}'>delete</a>`;
        tr.appendChild(td4);

        table.appendChild(tr);
       
        var deleteBtn = document.getElementById(`delete-${contact.id}`);
        deleteBtn.addEventListener("click", function(){
           var id = this.getAttribute("data-id");
           var row = document.getElementById("row-"+id);
           row.remove();
        });

    }

}

var addressBook = new AddressBook();
addressBook.init();