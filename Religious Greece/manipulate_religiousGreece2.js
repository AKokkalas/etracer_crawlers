/*For religiousgreece  crawler*/


function create_geoJSON(easie_result){
	$.each( easie_result, function( key, value ) {
		var new_json = JSON.parse(JSON.stringify(json_template));
		
		
		
		new_json.properties.name = value.company[0].name;
		
		new_json.geometry.coordinates.push(parseFloat(value.metrics[0][2].value)); //lat
		new_json.geometry.coordinates.push(parseFloat(value.metrics[0][1].value)); //lon
		
		new_json.properties.full_descr = value.metrics[0][0].value;
		new_json.properties.website = value.metrics[0][0].source;
			
		
		new_json.properties.category.push("02");
		
		geojson_template.features.push(new_json);
		return geojson_template;
		//new_json.full_descr = value.metrics[0][0].value;
		
	});
	
	
	
}

function create_info_json (v_string){
	var info_array = v_string.split(" ");
	var info_json = {};
	var json_key = "";
	var json_value = "";
	//debugger;
	var arrayLength = info_array.length;
	for (var i = 0; i < arrayLength; i++) {
		//debugger;
		console.log(i);
    var element = info_array[i];
	console.log(element);
	if (element.includes(":")){ //found key
			if (json_value != ""){ //populate json
				info_json[json_key] = json_value;
				json_key = element.slice(0,-1); //remove ":"
				json_value = "";
			}
			else{
				json_key = element.slice(0,-1);
				json_value = "";
			}
		}
	else{
		json_value = json_value + " " + element;
	}
	if (i == arrayLength - 1){ //last element
		if (json_key != ""){
			info_json[json_key] = json_value;
		}
	}
    
	}
	console.log(info_json);
	return info_json;
	
}



var geojson_template = {
   "type":"FeatureCollection",
   "name":"points_of_interest",
   "features":[
      
   ]
};

var json_template = {
         "id":null,
         "type":"Feature",
         "geometry":{
            "type":"Point",
            "coordinates":[]
         },
         "properties":{
            "wc":null,
            "food":null,
            "name":null,
            "dimos":null,
            "email":null,
            "image":null,
            "is_ar":null,
            "awards":null,
            "refuge":null,
            "routes":null,
            "unesco":null,
            "address":null,
            "parking":null,
            "s_descr":null,
            "website":null,
            "category":[],
            "cultural":null,
            "name_eng":null,
            "shopping":null,
            "periferia":null,
            "protected":null,
            "published":null,
            "telephone":null,
            "exhibition":null,
            "full_descr":null,
            "restaurant":null,
            "source_cat":null,
            "time_spent":null,
            "amea_access":null,
            "per_enotita":null,
            "s_descr_eng":null,
            "subcategory":[],
            "ticket_cost":null,
            "interchanges":null,
            "accommodation":null,
            "certification":null,
            "info_material":null,
            "observatories":null,
            "difficulty_lvl":null,
            "full_descr_eng":null,
            "interchange_id":[],
            "kallikratis_id":null,
            "historic_period":null,
            "outdoor_company":null,
            "nearest_neighbour":null,
            "outdoor_activities":null,
            "recreational_areas":null
         }
      }

/*Example

var infos = create_info_json("Χρονολόγηση: 1952 Περίοδος: Νεότερη Πανηγυρίζει: 15 Αυγούστου Ιερά Μητρόπολη: Βεροίας και Ναούσης Διεύθυνση: Καστανιά, Τ.Κ. 59100 Τηλέφωνο: 23310 88139 Πρόσβαση: Με Ι.Χ. Στάθμευση: Ελεύθερος χώρος στάθμευσης Εξωτερικός σύνδεσμος Στον άξονα της Εγνατίας Οδού Η Εγνατία Οδός, ο μεγαλύτερος αυτοκινητόδρομος της Ελλάδας, διασχίζει την Ήπειρο, την Μακεδονία...");
*/