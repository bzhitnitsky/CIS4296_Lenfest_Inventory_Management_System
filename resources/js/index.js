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
                        <td>${randomFunc()}</td>
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
      
      console.log(makeid());

});
