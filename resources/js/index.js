document.addEventListener("DOMContentLoaded", function(event) { 


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
                        <td>${device.build_number+device.id}</td>
                        <td>${device.id % 3 == 0 ? 'Available' : 'Lent'}</td>
                        <td>${new Date().toLocaleDateString('en-US')}</td>
                    </tr>
                    `
                );
                
            });


            $('.inventory-table-row table').DataTable();

            console.log( response ); 
        }
    });

});