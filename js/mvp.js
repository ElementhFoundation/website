var products = {};


var tiresWidth = [
    "10",
    "10.5",
    "100",
    "101",
    "102",
    "103",
    "104",
    "105",
    "106",
    "107",
    "108",
    "109",
    "11",
    "11.2",
    "11.5",
    "110",
    "112",
    "113",
    "114",
    "115",
    "116",
    "12",
    "12.4",
    "12.5",
    "120",
    "121",
    "122",
    "125",
    "127",
    "13",
    "13.5",
    "13.6",
    "130",
    "135",
    "139",
    "14",
    "14.5",
    "140",
    "145",
    "15",
    "15.5",
    "150",
    "155",
    "16",
    "16.5",
    "160",
    "162",
    "165",
    "17",
    "17.5",
    "170",
    "174",
    "175",
    "176",
    "178",
    "18",
    "18.4",
    "18.5",
    "180",
    "184",
    "185",
    "19",
    "19.5",
    "190",
    "194",
    "195",
    "196",
    "2",
    "2.25",
    "2.5",
    "2.75",
    "20",
    "200",
    "205",
    "207",
    "21",
    "21.3",
    "210",
    "215",
    "218",
    "220",
    "223",
    "225",
    "226",
    "23",
    "23.5",
    "230",
    "235",
    "238",
    "239",
    "24",
    "240",
    "245",
    "246",
    "247",
    "249",
    "25",
    "250",
    "255",
    "255.55",
    "26",
    "26.5",
    "260",
    "265",
    "266",
    "27",
    "270",
    "275",
    "28.1",
    "280",
    "285",
    "286",
    "29",
    "29.5",
    "290",
    "295",
    "296",
    "3",
    "3.25",
    "3.5",
    "3.6",
    "3.75",
    "30",
    "30.5",
    "300",
    "305",
    "31",
    "310",
    "311",
    "315",
    "316",
    "318",
    "31X",
    "32",
    "320",
    "321",
    "325",
    "33",
    "330",
    "331",
    "335",
    "34",
    "340",
    "343",
    "345",
    "35",
    "350",
    "351",
    "352",
    "354",
    "355",
    "36",
    "360",
    "365",
    "37",
    "370",
    "371",
    "375",
    "38",
    "38.5",
    "380",
    "385",
    "39",
    "39.5",
    "390",
    "395",
    "4",
    "4.1",
    "4.25",
    "4.5",
    "4.6",
    "40",
    "400",
    "405",
    "410",
    "42",
    "420",
    "425",
    "435",
    "44",
    "440",
    "445",
    "45",
    "455",
    "460",
    "475",
    "480",
    "495",
    "5",
    "50",
    "500",
    "520",
    "525",
    "530",
    "533",
    "540",
    "55",
    "560",
    "580",
    "6",
    "6.15",
    "6.4",
    "6.45",
    "6.5",
    "6.95",
    "60",
    "600",
    "620",
    "640",
    "65",
    "650",
    "670",
    "7",
    "7.5",
    "70",
    "700",
    "710",
    "75",
    "750",
    "78",
    "79",
    "8",
    "8.15",
    "8.25",
    "8.3",
    "8.4",
    "8.5",
    "8.75",
    "80",
    "800",
    "825",
    "85",
    "9",
    "9.5",
    "9.75",
    "90",
    "95",
    "950",
    "<>"
];
var tiresHeight = [
    "10",
    "10.2",
    "10.5",
    "100",
    "11",
    "11.5",
    "12",
    "12.5",
    "13",
    "13.5",
    "14",
    "14.5",
    "15",
    "15.5",
    "16",
    "17",
    "18",
    "18.5",
    "19",
    "19.5",
    "20",
    "21",
    "22",
    "25",
    "28",
    "30",
    "30.22",
    "30.5",
    "31",
    "315",
    "32",
    "33",
    "35",
    "36",
    "37",
    "38",
    "38.5",
    "39",
    "39.5",
    "4",
    "40",
    "42",
    "44",
    "45",
    "46",
    "47",
    "5",
    "50",
    "53",
    "55",
    "58",
    "59",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "7",
    "7.5",
    "70",
    "72",
    "74",
    "75",
    "76",
    "77",
    "78",
    "8.5",
    "80",
    "81",
    "82",
    "84",
    "85",
    "87",
    "88",
    "9",
    "9.5",
    "90",
    "95",
    "98",
    "99",
    "<>"
];
var tiresRadius = [
    "10",
    "10.50",
    "11",
    "12",
    "12.5",
    "13",
    "13.5",
    "14",
    "15",
    "15.3",
    "16",
    "16.5",
    "17",
    "17.5",
    "18",
    "19",
    "19.5",
    "20",
    "21",
    "22",
    "22.5",
    "23",
    "23.5",
    "24",
    "25",
    "26",
    "26.5",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "42",
    "44",
    "45",
    "46",
    "48",
    "50",
    "54",
    "55",
    "6",
    "60",
    "7",
    "8",
    "8.25",
    "9",
    "9.00",
    "9.5"
];

var wheelsWidth = [
    "10",
    "10.5",
    "11",
    "11.5",
    "11.75",
    "12",
    "12.5",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "27.5",
    "4.00",
    "4.5",
    "5",
    "5.25",
    "5.5",
    "5.50",
    "6",
    "6.5",
    "6.6",
    "6.75",
    "7",
    "7.5",
    "7.56",
    "8",
    "8.1",
    "8.25",
    "8.5",
    "8.8",
    "9",
    "9.5",
    "9.50"
];
var wheelsRadius = [
    "10",
    "10.5",
    "11",
    "11.5",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "17.5",
    "18",
    "19",
    "19.5",
    "20",
    "21",
    "22",
    "22.5",
    "23",
    "24",
    "25",
    "26",
    "29",
    "5.0",
    "5.5",
    "6.0",
    "6.5",
    "7",
    "7.5",
    "8",
    "8.5",
    "9",
    "9.5"
];
var wheelsDia = [
    "-",
    "-10",
    "-12",
    "-13",
    "-20",
    "-25",
    "-30",
    "-35",
    "-40",
    "0.0",
    "0.8",
    "1.5",
    "10",
    "100",
    "100.1",
    "100.2",
    "100.5",
    "101",
    "101.5",
    "101.6",
    "102",
    "103",
    "104.1",
    "104.10",
    "105",
    "105.5",
    "106",
    "106.1",
    "106.10",
    "106.2",
    "106.20",
    "106.25",
    "106.3",
    "106.4",
    "106.5",
    "106.6",
    "107",
    "107.1",
    "107.5",
    "107.6",
    "108",
    "108.1",
    "108.2",
    "108.3",
    "108.4",
    "108.5",
    "108.6",
    "108.7",
    "109",
    "109.5",
    "109.7",
    "109.8",
    "110",
    "110.1",
    "110.2",
    "110.3",
    "110.5",
    "110.6",
    "111",
    "111.6",
    "112",
    "112.1",
    "112.2",
    "112.5",
    "113",
    "113.1",
    "114",
    "114.3",
    "115",
    "115.1",
    "116",
    "116.2",
    "117.2",
    "117.5",
    "118",
    "118.1",
    "118.10",
    "12",
    "120",
    "120.3",
    "121",
    "122",
    "122.5",
    "123",
    "124.9",
    "125",
    "125.1",
    "125.2",
    "125.5",
    "126",
    "127",
    "128",
    "13",
    "130",
    "130.1",
    "130.8",
    "130.81",
    "131",
    "131.1",
    "133",
    "134",
    "135",
    "136",
    "138",
    "138.8",
    "139",
    "14",
    "140",
    "141",
    "142",
    "142.1",
    "143",
    "144",
    "145",
    "146",
    "148",
    "15",
    "150",
    "158",
    "16",
    "160",
    "161",
    "163",
    "164",
    "164.1",
    "165",
    "169",
    "17",
    "170",
    "174",
    "176",
    "177",
    "18",
    "2.5",
    "2.6",
    "20",
    "202",
    "21",
    "22",
    "220",
    "221",
    "228",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "281",
    "29",
    "3",
    "3.5",
    "30",
    "31",
    "31.5",
    "32",
    "33",
    "34",
    "35",
    "36",
    "36.5",
    "37",
    "37.5",
    "38",
    "39",
    "39.5",
    "4/100",
    "4/108",
    "4/114,3",
    "4/98",
    "40",
    "40.5",
    "41",
    "41.3",
    "41.5",
    "42",
    "43",
    "43.5",
    "43.8",
    "44",
    "45",
    "45.5",
    "46",
    "47",
    "47.5",
    "48",
    "49",
    "49.5",
    "5",
    "5/105",
    "5/108",
    "5/110",
    "5/112",
    "5/114,3",
    "5/115",
    "5/118",
    "5/120",
    "5/130",
    "5/139,7",
    "5/160",
    "50",
    "50.5",
    "50.8",
    "51",
    "52",
    "52.2",
    "52.5",
    "53",
    "54",
    "54.0",
    "54.1",
    "54.10",
    "54.12",
    "55",
    "55.1",
    "56",
    "56.1",
    "56.4",
    "56.5",
    "56.56",
    "56.6",
    "56.62",
    "56.7",
    "57",
    "57.06",
    "57.09",
    "57.1",
    "57.12",
    "57.2",
    "57.6",
    "58",
    "58.1",
    "58.10",
    "58.5",
    "58.6",
    "58.60",
    "58.8",
    "59",
    "59.5",
    "59.7",
    "6",
    "6.3",
    "6.6",
    "6/139,7",
    "60",
    "60,1",
    "60,15",
    "60,2",
    "60,4",
    "60,5",
    "60.",
    "60.0",
    "60.00",
    "60.1",
    "60.10",
    "60.15",
    "60.2",
    "60.3",
    "60.30",
    "60.4",
    "60.5",
    "61",
    "61.1",
    "61.9",
    "62",
    "63",
    "63.1",
    "63.3",
    "63.35",
    "63.4",
    "63.40",
    "63.45",
    "63.5",
    "63.50",
    "63.6",
    "64",
    "64.1",
    "64.12",
    "64.2",
    "65",
    "65.05",
    "65.06",
    "65.1",
    "65.2",
    "65.6",
    "65.61",
    "65.8",
    "66",
    "66.06",
    "66.1",
    "66.2",
    "66.3",
    "66.4",
    "66.45",
    "66.46",
    "66.5",
    "66.55",
    "66.56",
    "66.6",
    "66.66",
    "66.69",
    "66.7",
    "66.9",
    "67",
    "67.1",
    "67.10",
    "67.14",
    "67.2",
    "67.20",
    "67.7",
    "68",
    "68.1",
    "69",
    "69.1",
    "69.3",
    "69.6",
    "7.5",
    "70",
    "70.02",
    "70.1",
    "70.2",
    "70.27",
    "70.28",
    "70.3",
    "70.4",
    "70.5",
    "70.6",
    "70.7",
    "71",
    "71.1",
    "71.15",
    "71.2",
    "71.3",
    "71.4",
    "71.45",
    "71.5",
    "71.56",
    "71.58",
    "71.6",
    "71.69",
    "71.8",
    "72",
    "72.1",
    "72.2",
    "72.25",
    "72.3",
    "72.4",
    "72.5",
    "72.55",
    "72.56",
    "72.6",
    "72.62",
    "72.69",
    "72.7",
    "72.9",
    "73",
    "73.01",
    "73.06",
    "73.1",
    "73.10",
    "73.2",
    "73.3",
    "73.4",
    "73.6",
    "73.8",
    "73.9",
    "74",
    "74.1",
    "74.10",
    "74.2",
    "74.20",
    "74.6",
    "75",
    "75.1",
    "75.5",
    "76",
    "76.1",
    "76.2",
    "76.5",
    "76.6",
    "76.9",
    "77",
    "77.7",
    "77.77",
    "77.8",
    "77.9",
    "78",
    "78.01",
    "78.06",
    "78.09",
    "78.1",
    "78.11",
    "78.2",
    "78.3",
    "78.7",
    "79",
    "79.1",
    "79.5",
    "79.55",
    "79.6",
    "8",
    "8.5",
    "80",
    "80.1",
    "81.5",
    "82",
    "82.4",
    "82.40",
    "82.5",
    "82.50",
    "83",
    "83.5",
    "83.7",
    "83.8",
    "84",
    "84.1",
    "84.2",
    "85",
    "85.1",
    "87",
    "87.1",
    "87.2",
    "88",
    "88.1",
    "89",
    "89.1",
    "9",
    "9.5",
    "90",
    "91",
    "92",
    "92.1",
    "92.2",
    "92.3",
    "92.4",
    "92.5",
    "92.6",
    "93",
    "93.1",
    "93.5",
    "94",
    "95",
    "95.3",
    "95.4",
    "95.5",
    "95.6",
    "96",
    "97.1",
    "98",
    "98.1",
    "98.5",
    "98.6",
    "99",
    "L100",
    "L100.1",
    "L106.1",
    "L106.3",
    "L107.1",
    "L108.1",
    "L108.5",
    "L110",
    "L110.1",
    "L110.2",
    "L110.5",
    "L53.3",
    "L54.1",
    "L56.1",
    "L56.5",
    "L56.6",
    "L57.1",
    "L58",
    "L58.1",
    "L58.5",
    "L58.6",
    "L60.1",
    "L63.3",
    "L63.35",
    "L63.4",
    "L64.1",
    "L65.1",
    "L66",
    "L66.1",
    "L66.6",
    "L67",
    "L67.1",
    "L69.1",
    "L70.1",
    "L70.3",
    "L71.5",
    "L71.6",
    "L72.5",
    "L72.6",
    "L73.1",
    "L73.2",
    "L74.1",
    "L84.1",
    "L93.1",
    "L95.5",
    "L98",
    "L98.5",
    "L98.6",
    "L98.7",
    "PLY",
    "XL"
];



$().ready(function () {

    $( "#form-search" ).find('input[name="wheels-width"]').autocomplete({
        source: wheelsWidth
    })

    $( "#form-search" ).find('input[name="wheels-radius"]').autocomplete({
        source: wheelsRadius
    });

    $( "#form-search" ).find('input[name="wheels-dia"]').autocomplete({
        source: wheelsDia
    });

    $( "#form-search" ).find('input[name="tires-width"]').autocomplete({
        source: tiresWidth
    })

    $( "#form-search" ).find('input[name="tires-height"]').autocomplete({
        source: tiresHeight
    });

    $( "#form-search" ).find('input[name="tires-radius"]').autocomplete({
        source: tiresRadius
    });


    $('#search-button').click(function (e) {
        e.preventDefault();
        $('#product-list').html('');

        if(!$('#tab-additional-search').is(':visible')) {
            $('#search-type').val('none')
        }

        $.get('https://apimvp.elementh.io/search?' + $('#form-search').serialize(), function (data) {

            if(data.response.result.length === 0) $('#product-list').html('No results');
            data.response.result.forEach(function (data) {
                var productHtml = $('#product-item-empty').clone();
                productHtml.attr('id', 'product-'+data._id);
                productHtml.removeClass('d-none');
                productHtml.find('.product-name').html(data._source.model.brand.title + ' ' + data._source.model.title + ' :: ' + data._source.eepc);
                productHtml.find('.product-image').attr('src', data._source.model.photos[0].path);
                productHtml.find('.product-attributes').html('<tr><th>Attribute</th><th>Value</th></tr>');
                data._source.attributes.forEach(function (attribute, index) {
                    productHtml.find('.product-attributes').append(`<tr><td>${attribute.alias}</td><td>${attribute.value}</td></tr>`);
                });

                productHtml.find('.product-offers').html(`<tr>
                                        <th>Retailer</td>
                                        <th>Amount</th>
                                        <th>Price</th>
                                        <th></th>
                                    </tr>`);
                data._source.sku.forEach(function (sku, index) {
                    productHtml.find('.product-offers').append(`<tr><td>${data._source.sku[index].stock.company.alias}</td>
                                        <td>${data._source.sku[index].qty}</td>
                                        <td>${'$' + (data._source.sku[index].retail_price / 57).toFixed(2)}</td>
                                        <td>
                                            <button type="button" class="btn btn-outline-primary btn-sm product-show-eesn" data-target="${data._source.eepc}">show serial number and history</button>
                                        </td></tr>`);
                });

                products[data._source.eepc] = data._source;

                productHtml.find('.product-eesn');
                $('#product-list').append(productHtml);
            })

            $('.product-show-eesn').click(function () {
                // modal modify
                var eesnModal = $('.eesn-modal');
                eesnModal.find('.accordion').html('');
                eesnModal.find('.modal-title').html($(this).attr('data-target'));
                products[$(this).attr('data-target')].eesn.forEach(function (eesn) {

                    var transfers = '';
                    eesn.transactions.forEach(function (transaction) {
                        transfers += `<tr>
                    <td><span>${transaction.date}</span></td>
                    <td>
                        <p>
                            <span class="text-muted">From:</span>
                            <span class="badge badge-pill badge-success">${(transaction.from.name) ? transaction.from.name: ""}</span> ${transaction.from.address}
                        </p>
                        <p>
                            <span class="text-muted">To:</span>
                            <span class="badge badge-pill badge-success">${(transaction.to.name) ? transaction.to.name: ""}</span>${transaction.to.address}
                        </p>
                    </td>
                </tr>`
                    })

                    eesnModal.find('.accordion').append(`<div class="card">
                <div class="card-header">
                    <h5 class="mb-0">
                        ${eesn.eesn}
                        <button class="btn btn-info btn-sm" data-toggle="collapse" data-target="#${eesn.eesn}" aria-expanded="true" aria-controls="collapseOne">
                            show history of ownership
                        </button>
                    </h5>
                </div>

                <div id="${eesn.eesn}" class="collapse hide" aria-labelledby="${eesn.eesn}" data-parent="#${eesn.eesn}">
                    <div class="card-body">
                        <table class="table">${transfers}</table>
                    </div>
                </div>
            </div>`)
                })

                eesnModal.modal()
            })

        })
    })
});