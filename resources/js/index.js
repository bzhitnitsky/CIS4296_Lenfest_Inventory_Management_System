document.addEventListener("DOMContentLoaded", function(event) { 

    // window.InventoryItems = [];

    // InventoryItems.push( new Item('Phone', 'Apple', 'iPhone 13 Pro Max', '7TZ4WYF5UB7H', 293885104341070, 'Available', new Date().toLocaleDateString('en-US')));
    // InventoryItems.push( new Item('Phone', 'Apple', 'iPhone 8', 'DQC66DV7LVBM', 783889027604193, 'Available', new Date().toLocaleDateString('en-US')));
    // InventoryItems.push( new Item('Phone', 'Apple', 'iPhone XS', 'YFVOJ5C1YJBS', 990707928213957, 'Lent', new Date().toLocaleDateString('en-US')));
    // InventoryItems.push( new Item('Phone', 'Apple', 'iPhone SE', 'AL5AYI1PUXBF', 486661844229731, 'Available', new Date().toLocaleDateString('en-US')));
    // InventoryItems.push( new Item('Phone', 'Apple', 'iPhone X', 'JGCG1U2YQUO7', 890066931840454, 'Lent', new Date().toLocaleDateString('en-US')));


    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };



    $.ajax({
        method: "GET",
        cache: 'false',
        url: "https://random-data-api.com/api/device/random_device?size=100",
        success: function(response) {
            response.forEach(device => {

                // InventoryItems.push( new Item('Phone', device.manufacturer, device.model, device.serial_number, device.build_number+device.id, device.id % 3 == 0 ? 'Available' : 'Lent', new Date().toLocaleDateString('en-US')));
                //                        <td>${randomFunc()}</td>

                $('.inventory-table-row tbody').append(
                    `
                    <tr>
                        <td>Phone</td>
                        <td>${device.manufacturer}</td>
                        <td>${device.model}</td>
                        <td>${device.serial_number}</td>
                        <td>${device.build_number+device.id}</td>
                        <td>${device.id % 3 == 0 ? '<span class="badge rounded-pill bg-success">Available</span>' : '<span class="badge rounded-pill bg-light border text-dark">Lent</span>'}</td>
                        <td>${new Date().toLocaleDateString('en-US')}</td>
                        <td class="text-center">
                            <div class="btn-group" role="group">
                                ${device.id % 3 == 0 ? '<button type="button" data-tippy-content="Lend Item" data-bs-toggle="modal" data-modal-type="Lend" data-bs-target="#exampleModal" class="btn btn-sm btn-outline-secondary border"><i class="fa-solid fa-arrow-right-from-arc fa-fw"></i></button><!-- <small> Lend</small> -->' : '<button type="button" data-tippy-content="Return Item" data-bs-toggle="modal" data-modal-type="Return" data-bs-target="#exampleModal" class="btn btn-sm btn-outline-secondary border"><i class="fa-solid fa-arrow-right-to-arc fa-rotate-180 fa-fw"></i></button>'}
                                <button type="button" data-tippy-content="More Details" data-bs-toggle="modal" data-modal-type="Info" data-bs-target="#exampleModal" class="btn btn-sm btn-outline-secondary border"><i class="fa-solid fa-info fa-fw"></i></button>
                            </div>                            
                        </td>
                    </tr>
                    `
                );
                
            });


            $('.inventory-table-row table').DataTable();

            tippy('[data-tippy-content]',
            {
                placement: 'bottom',
                animation: 'shift-away',
            });


            console.log( response ); 
        }
    });
    
    function randomFunc() {
        for (let i = 0; i < 2; i++) {
            const random = names[Math.floor(Math.random() * names.length)];
            return random
        }
    }
    const names = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", 
    "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", 
    "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew",
     "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg",
      "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", 
      "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein",
       "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", 
       "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry",
       "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg",
        "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", 
        "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", 
        "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler" ]
    console.log(randomFunc(names));
      

    var exampleModal = document.getElementById('exampleModal');

    exampleModal.addEventListener('show.bs.modal', function (event) {

        // Button that triggered the modal
        var button = event.relatedTarget
        
        // Extract info from data-modal-type attribute
        var modalType = button.getAttribute('data-modal-type')

        if(modalType == 'Lend'){
            modalContent = `
                                <h5 class="py-3 text-center border-bottom" id="exampleModalLabel">Lend Item</h5>
                                <div class="modal-body">
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">Lendee's Email Address</label>
                                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                                    </div>
                                    <br>
                                    <p class="text-muted"><small>The lendee will receive an email requiring confirmation of the request to lend the item, and will be required to sign any applicable forms at that time.</small></p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="toastr.success('Notification Email Sent! Item is now pending.');">Lend</button>
                                </div>
            `;
        }
        else if(modalType == 'Return')
        modalContent = `
                                <h5 class="py-3 text-center border-bottom" id="exampleModalLabel">Return Item</h5>
                                <div class="modal-body">
                                
                                <label>Item Condition (1 = Worst, 5 = Best)</label>
                                <br>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                                    <label class="form-check-label" for="inlineRadio1">1</label>
                                </div>
                                    <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                                    <label class="form-check-label" for="inlineRadio2">2</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">
                                    <label class="form-check-label" for="inlineRadio3">3</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4">
                                    <label class="form-check-label" for="inlineRadio4">4</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5">
                                    <label class="form-check-label" for="inlineRadio5">5</label>
                                </div>
                                <br>
                                <label for="comments">Comments</label>
                                <textarea class="form-control" id="comments"></textarea>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="toastr.success('Item has been returned!');">Return</button>
                                </div>
                        `;
        else if(modalType == 'Info')
            modalContent =  `
                                <h5 class="py-3 text-center border-bottom" id="exampleModalLabel">Item Details</h5>
                                <div class="modal-body">
                                
                                    <h4>Item Type</h4>
                                    <p>Item Type Here</p>

                                    <h4>Item Brand</h4>
                                    <p>Item Brand Here</p>

                                    <h4>Item Model</h4>
                                    <p>Item Model Here</p>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>

                            `;

        exampleModal.querySelector('.modal-content').innerHTML = modalContent;

    })

    


});
