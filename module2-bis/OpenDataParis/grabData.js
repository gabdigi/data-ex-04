let opendataparisAPI    = "https://opendata.paris.fr/api/records/";
let version             = "1.0/";
let question            = "search/?";
let dataset             = "dataset="+"les-1000-titres-les-plus-reserves-dans-les-bibliotheques-de-pret";
let rows                = "&rows="+1000;
let sort                = "&sort=reservations";
let facetrequest        = "&facet=";
let facets              = facetrequest+"type_de_document"+facetrequest+"auteur";

let request             = opendataparisAPI + version + question + dataset + rows + sort + facets;

let topTenLabels        = [];
let topTenCount         = [];

LoadData(request)
    .then(function(response){
        console.log(response);

        let records = response.records; 
        console.log(records);
        for( let i=0; i<10; i++) {
            let titre   = records[i].fields.titre;
            let auteur  = records[i].fields.titre;

            let label   = titre+" de "+auteur;
            let count   = records[i].fields.reservations; 
            
            topTenLabels.push(label);
            topTenCount.push(count);
        }
       
    })

    barGraph("topTenTitleChart", topTenLabels, "test", topTenCount);

    /*.catch(function(error){
        console.error(error); 
    })*/