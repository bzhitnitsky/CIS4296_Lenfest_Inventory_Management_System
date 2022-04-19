
function showTab(id){
    if(window.displayTable)
        displayTable.destroy();

    if(id == 'availableTab'){
        
        $('.inventory-table-row').html(
            `
                <div class="bg-white p-4 rounded">
                    <h2 class="sectionName">Available</h2>
                    <table class="table table-sm" id="AvailablePage">
                        <thead>
                        <th>Type</th>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Location</th>
                        <th>Serial #</th>
                        <th>FOAPAL #</th>
                        <th>As Of</th>
                        <th>Actions</th>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            `
        );

        $.ajax({
            method: "GET",
            cache: 'false',
            url: "https://random-data-api.com/api/device/random_device?size=45",
            success: function (response) {
                response.forEach(device => {

                    $('.inventory-table-row tbody').append(
                        `
                            <tr>
                                <td>Phone</td>
                                <td>${device.manufacturer}</td>
                                <td>${device.model}</td>
                                <td>${device.id % 3 == 0 ? 'Closet' : 'Nias Office'}</td>
                                <td>${device.serial_number}</td>
                                <td>${device.build_number + device.id}</td>
                                <td>${new Date().toLocaleDateString('en-US')}</td>
                                <td class="text-center">
                                    <div class="btn-group" role="group">
                                        <button type="button" data-tippy-content="Lend Item" data-bs-toggle="modal" data-modal-type="Lend" data-bs-target="#exampleModal" class="btn btn-sm btn-outline-secondary border"><i class="fa-solid fa-arrow-right-from-arc fa-fw"></i></button><!-- <small> Lend</small> -->
                                        <button type="button" data-tippy-content="More Details" data-bs-toggle="modal" data-modal-type="Info" data-bs-target="#exampleModal" class="btn btn-sm btn-outline-secondary border"><i class="fa-solid fa-info fa-fw"></i></button>
                                    </div>                            
                                </td>
                            </tr>
                        `
                    );

                });


                window.displayTable = $('.inventory-table-row table').DataTable();

                tippy('[data-tippy-content]',
                    {
                        placement: 'bottom',
                        animation: 'shift-away',
                        trigger: 'mouseenter'
                    });

                // console.log(response);
            }
        });
    } else if(id == 'pendingTab'){
        
        $('.inventory-table-row').html(
            `
                <div class="bg-white p-4 rounded">
                    <h2 class="sectionName">Pending</h2>
                    <table class="table table-sm" id="pendingPage">
                        <thead>
                        <th>Type</th>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Last Name</th>
                        <th>FOAPAL #</th>
                        <th>Status</th>
                        <th>As Of</th>
                        <th>Actions</th>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            `
        );

        $.ajax({
            method: "GET",
            cache: 'false',
            url: "https://random-data-api.com/api/device/random_device?size=27",
            success: function (response) {
                response.forEach(device => {

                    $('.inventory-table-row tbody').append(
                        `
                        <tr>
                            <td>Phone</td>
                            <td>${device.manufacturer}</td>
                            <td>${device.model}</td>
                            <td>${randomFunc()}</td>
                            <td>${device.build_number + device.id}</td>
                            <td>${device.id % 3 == 0 ? 'Form Signed' : 'Awaiting Form Signature'}</td>
                            <td>${new Date().toLocaleDateString('en-US')}</td>
                            <td class="text-center">
                                <div class="btn-group" role="group">
                                    <button type="button" data-tippy-content="Return Item" onclick="confirmDelete('Return Item to Available?','Item Now Available!');" class="btn btn-sm btn-outline-secondary border"><i class="fa-solid fa-arrow-right-to-arc fa-rotate-180 fa-fw"></i></button>
                                    <button type="button" data-tippy-content="More Details" data-bs-toggle="modal" data-modal-type="Info" data-bs-target="#exampleModal" class="btn btn-sm btn-outline-secondary border"><i class="fa-solid fa-info fa-fw"></i></button>
                                </div>                              
                            </td>
                        </tr>
                        `
                    );

                });


                window.displayTable = $('.inventory-table-row table').DataTable();

                tippy('[data-tippy-content]',
                    {
                        placement: 'bottom',
                        animation: 'shift-away',
                        trigger: 'mouseenter'
                    });

                // console.log(response);
            }
        });
    } else if(id == 'lentTab'){
        
        $('.inventory-table-row').html(
            `
            <div class="bg-white p-4 rounded">
                <h2 class="sectionName">Lent Items</h2>
                <table class="table table-sm" id="lentPage">
                    <thead>
                    <th>Type</th>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Location</th>
                    <th>As Of</th>
                    <th>Comments</th>
                    <th>Actions</th>
                    </thead>
                    <tbody>
                    </tbody>
                </table>

            </div>
            `
        );

        $.ajax({
            method: "GET",
            cache: 'false',
            url: "https://random-data-api.com/api/device/random_device?size=100",
            success: function (response) {
                response.forEach(device => {

                    $('.inventory-table-row tbody').append(
                        `
                        <tr>
                            <td>Phone</td>
                            <td>${device.manufacturer}</td>
                            <td>${device.model}</td>
                            <td>${randomFunc()}</td>
                            <td>${randomFunc()}</td>
                            <td>${"Room " + device.id}</td>
                            <td>${new Date().toLocaleDateString('en-US')}</td>
                            <td>${device.id % 3 == 0 ? 'New' : 'Old'}</td>
                            <td class="text-center">
                                <div class="btn-group" role="group">
                                    <button type="button" data-tippy-content="Return Item" data-bs-toggle="modal" data-modal-type="Return" data-bs-target="#exampleModal" class="btn btn-sm btn-outline-secondary border"><i class="fa-solid fa-arrow-right-to-arc fa-rotate-180 fa-fw"></i></button>
                                    <button type="button" data-tippy-content="More Details" data-bs-toggle="modal" data-modal-type="Info" data-bs-target="#exampleModal" class="btn btn-sm btn-outline-secondary border"><i class="fa-solid fa-info fa-fw"></i></button>
                                </div>              
                            </td>
                        </tr>
                        `
                    );

                });


                window.displayTable = $('.inventory-table-row table').DataTable();

                tippy('[data-tippy-content]',
                    {
                        placement: 'bottom',
                        animation: 'shift-away',
                        trigger: 'mouseenter'
                    });

                // console.log(response);
            }
        });
    } else if(id == 'unavailableTab'){
        
        $('.inventory-table-row').html(
            `
            <div class="bg-white p-4 rounded">
                <h2 class="sectionName">Unavailable</h2>
                <table class="table table-sm" id="testTable">
                    <thead>
                    <th>Type</th>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Serial #</th>
                    <th>FOAPAL #</th>
                    <th>Status</th>
                    <th>As Of</th>
                    <th>Actions</th>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
            `
        );

        $.ajax({
            method: "GET",
            cache: 'false',
            url: "https://random-data-api.com/api/device/random_device?size=10",
            success: function (response) {
                response.forEach(device => {

                    $('.inventory-table-row tbody').append(
                        `
                        <tr>
                            <td>Phone</td>
                            <td>${device.manufacturer}</td>
                            <td>${device.model}</td>
                            <td>${device.serial_number}</td>
                            <td>${device.build_number + device.id}</td>
                            <td>${device.id % 3 == 0 ? 'Damaged' : 'Stolen'}</td>
                            <td>${new Date().toLocaleDateString('en-US')}</td>
                            <td class="text-center">
                                <div class="btn-group" role="group">
                                    <button type="button" data-tippy-content="Remove Item" onclick="confirmDelete('Delete the item?','Item Deleted!');" class="btn btn-sm btn-outline-secondary border"><i class="fa-solid fa-ban"></i></button>
                                    <button type="button" data-tippy-content="More Details" data-bs-toggle="modal" data-modal-type="Info" data-bs-target="#exampleModal" class="btn btn-sm btn-outline-secondary border"><i class="fa-solid fa-info fa-fw"></i></button>
                                </div>
                            </td>
                        </tr>
                        `
                    );

                });


                window.displayTable = $('.inventory-table-row table').DataTable();

                tippy('[data-tippy-content]',
                    {
                        placement: 'bottom',
                        animation: 'shift-away',
                        trigger: 'mouseenter'
                    });

                // console.log(response);
            }
        });
    } else if(id == 'totalTab'){
        
        $('.inventory-table-row').html(
            `
            <div class="bg-white p-4 rounded">
                <h2 class="sectionName">Total Inventory</h2>
                <table class="table table-sm" id="totalPage">
                    <thead>
                    <th>Type</th>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Serial #</th>
                    <th>FOAPAL #</th>
                    <th>Status</th>
                    <th>As Of</th>
                    <th>Actions</th>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
            `
        );

        $.ajax({
            method: "GET",
            cache: 'false',
            url: "https://random-data-api.com/api/device/random_device?size=100",
            success: function (response) {
                response.forEach(device => {

                    $('.inventory-table-row tbody').append(
                        `
                        <tr>
                            <td>Phone</td>
                            <td>${device.manufacturer}</td>
                            <td>${device.model}</td>
                            <td>${device.serial_number}</td>
                            <td>${device.build_number + device.id}</td>
                            <td>${device.id % 3 == 0 ? 'Available' : 'Lent'}</td>
                            <td>${new Date().toLocaleDateString('en-US')}</td>
                            <td class="text-center">
                                <div class="btn-group" role="group">
                                    ${device.id % 3 == 0 ? '<button type="button" data-tippy-content="Lend Item" data-bs-toggle="modal" data-modal-type="Lend" data-bs-target="#exampleModal" class="btn btn-sm btn-outline-secondary border"><i class="fa-solid fa-arrow-right-from-arc fa-fw"></i></button>' : '<button type="button" data-tippy-content="Return Item" data-bs-toggle="modal" data-modal-type="Return" data-bs-target="#exampleModal"  class="btn btn-sm btn-outline-secondary border"><i class="fa-solid fa-arrow-right-to-arc fa-rotate-180 fa-fw"></i></button>'}
                                    <button type="button" data-tippy-content="More Details" data-bs-toggle="modal" data-modal-type="Info" data-bs-target="#exampleModal" class="btn btn-sm btn-outline-secondary border"><i class="fa-solid fa-info fa-fw"></i></button>
                                </div>                            
                            </td>
                        </tr>
                        `
                    );

                });


                window.displayTable = $('.inventory-table-row table').DataTable();

                tippy('[data-tippy-content]',
                    {
                        placement: 'bottom',
                        animation: 'shift-away',
                        trigger: 'mouseenter'
                    });

                // console.log(response);
            }
        });
    }
}

function randomFunc() {

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
            "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler" ];

        for (let i = 0; i < 2; i++) {
            const random = names[Math.floor(Math.random() * names.length)];
            return random
        }
}

function confirmDelete(textConfirm, textConfirmed){
    Swal.fire({
        title: textConfirm,
        text: "You won't be able to undo this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, do it!'
      }).then((result) => {
        if (result.isConfirmed) {
            toastr.info(textConfirmed);
        }
      })
}

document.addEventListener("DOMContentLoaded", function (event) {

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

    showTab('availableTab');

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

            test = `<h5 class="py-3 text-center border-bottom" id="exampleModalLabel">Lend Item</h5>
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
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Lend</button>
            </div>`;
        }
        else if(modalType == 'Return'){
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
        }
        else if(modalType == 'Info'){
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
        }

        console.log(modalType);

        $('#exampleModal .modal-content').html(modalContent);

        // exampleModal.querySelector('.modal-content').html = modalContent;
    })

});

