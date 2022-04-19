document.addEventListener("DOMContentLoaded", function (event) {

    $('#availableTable').hide()
    $('#lentTable').hide()
    $('#pendingTable').hide()
    $('#unavailableTable').hide()

    $.ajax({
        method: "GET",
        cache: 'false',
        url: "https://random-data-api.com/api/device/random_device?size=100",
        success: function(response) {
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
                                ${device.id % 3 == 0 ? '<button type="button" data-tippy-content="Lend Item" class="btn btn-sm btn-outline-secondary border"><i class="fa-solid fa-arrow-right-from-arc fa-fw"></i></button><!-- <small> Lend</small> -->' : '<button type="button" data-tippy-content="Return Item" class="btn btn-sm btn-outline-secondary border"><i class="fa-solid fa-arrow-right-to-arc fa-rotate-180 fa-fw"></i></button>'}
                                <button type="button" data-tippy-content="More Details" class="btn btn-sm btn-outline-secondary border"><i class="fa-solid fa-info fa-fw"></i></button>
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
    function randomStatus() {
        for (let i = 0; i < 2; i++) {
            const ranStatus = names[Math.floor(Math.random() * status.length)];
            return ranStatus
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

    const status = ["Lost", "Stolen", "Broken", "Surplus"]
    console.log(randomStatus(status));
      
    //   console.log(makeid());

    $('#availableTab').click(function () {
        $('#availableTable').show()
        $('#totalTable').hide()
        $('#lentTable').hide()
        $('#pendingTable').hide()
        $('#unavailableTable').hide()

        $('.inventory-table-row tbody').empty()

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
                        <td>Closet</td>
                        <td>${device.serial_number}</td>
                        <td>${device.build_number + device.id}</td>
                        <td>${new Date().toLocaleDateString('en-US')}</td>
                        <td class="text-center">
                            <div class="btn-group" role="group">
                                <button type="button" data-tippy-content="Lend Item" class="btn btn-sm btn-outline-secondary border"><i class="fa-solid fa-arrow-right-from-arc fa-fw"></i></button><!-- <small> Lend</small> -->
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

                console.log(response);
            }
        });
    });

    $('#pendingTab').click(function () {
        $('#availableTable').hide()
        $('#totalTable').hide()
        $('#lentTable').hide()
        $('#pendingTable').show()
        $('#unavailableTable').hide()

        $('.inventory-table-row tbody').empty()

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
                        <td>${device.build_number + device.id}</td>
                        <td>${device.id % 3 == 0 ? 'Form Signed' : 'Awaiting Form Signature'}</td>
                        <td>${new Date().toLocaleDateString('en-US')}</td>
                        <td class="text-center">
                            <div class="btn-group" role="group">
                                <button type="button" data-tippy-content="Lend Item" class="btn btn-sm btn-outline-secondary border"><i class="fa-solid fa-arrow-right-from-arc fa-fw"></i></button><!-- <small> Lend</small> -->
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

                console.log(response);
            }
        });
    });

    $('#lentTab').click(function () {
        $('#availableTable').hide()
        $('#totalTable').hide()
        $('#lentTable').show()
        $('#pendingTable').hide()
        $('#unavailableTable').hide()

        $('.inventory-table-row tbody').empty()

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
                                <button type="button" data-tippy-content="Return Item" class="btn btn-sm btn-outline-secondary border"><i class="fa-solid fa-arrow-right-to-arc fa-rotate-180 fa-fw"></i></button>
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

                console.log(response);
            }
        });
    });

    $('#totalTab').click(function () {
        $('#availableTable').hide()
        $('#totalTable').show()
        $('#lentTable').hide()
        $('#pendingTable').hide()
        $('#unavailableTable').hide()

        $('.inventory-table-row tbody').empty()

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
                                ${device.id % 3 == 0 ? '<button type="button" data-tippy-content="Lend Item" class="btn btn-sm btn-outline-secondary border"><i class="fa-solid fa-arrow-right-from-arc fa-fw"></i></button><!-- <small> Lend</small> -->' : '<button type="button" data-tippy-content="Return Item" class="btn btn-sm btn-outline-secondary border"><i class="fa-solid fa-arrow-right-to-arc fa-rotate-180 fa-fw"></i></button>'}
                                <button type="button" data-tippy-content="More Details" class="btn btn-sm btn-outline-secondary border"><i class="fa-solid fa-info fa-fw"></i></button>
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

                console.log(response);
            }
        });
    });

    $('#unavailableTab').click(function () {
        $('#availableTable').hide()
        $('#totalTable').hide()
        $('#lentTable').hide()
        $('#pendingTable').hide()
        $('#unavailableTable').show()

        $('.inventory-table-row tbody').empty()

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
                        <td>${randomStatus()}</td>
                        <td>${new Date().toLocaleDateString('en-US')}</td>
                        <td class="text-center">
                            <div class="btn-group" role="group">
                                ${device.id % 3 == 0 ? '<button type="button" data-tippy-content="Lend Item" class="btn btn-sm btn-outline-secondary border"><i class="fa-solid fa-arrow-right-from-arc fa-fw"></i></button><!-- <small> Lend</small> -->' : '<button type="button" data-tippy-content="Return Item" class="btn btn-sm btn-outline-secondary border"><i class="fa-solid fa-arrow-right-to-arc fa-rotate-180 fa-fw"></i></button>'}
                                <button type="button" data-tippy-content="More Details" class="btn btn-sm btn-outline-secondary border"><i class="fa-solid fa-info fa-fw"></i></button>
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

                console.log(response);
            }
        });
    });
});
