import axios from 'axios';

export default class TestAxios {
	constructor(el) {
		let jsonData = {};
    jsonData['access_token'] = 'ce088026e1e29bbe6d48d3bfc719ec89';
    jsonData['action'] = 'get_data';
    jsonData['data'] = '';

    let data = new FormData();
    data.append("json_data", JSON.stringify(jsonData));

		axios({
		  method: 'post',
		  headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
		  url: 'https://milo-vietnam.asiadigitalhub.com/milo_redemption_api/redemption/',
		  data: data
		}).then(function(response) {
		  console.log(response.statusText);
		  console.log(response.data);
		});
	}
}