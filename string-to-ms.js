/*!
 * String To Milliseconds (v1.0.1.20171210), http://tpkn.me/
 */

module.exports = str => {
	let time = 0;
	let time_type, time_value;
	let pure_str = ('' + str).split(' ').filter(v => v != '' && /^(\d{1,}\.)?\d{1,}[wdhms]{1}$/i.test(v));

	for(let i = 0, len = pure_str.length; i < len; i++){
		time_type = pure_str[i].match(/\w$/i);
		time_value = Number(pure_str[i].replace(time_type, ''));

		if(time_type && time_type.length){
			switch(time_type[0].toLowerCase()){
				case 'w':
					time += time_value * 604800000;
				break;
				case 'd':
					time += time_value * 86400000;
				break;
				case 'h':
					time += time_value * 3600000;
				break;
				case 'm':
					time += time_value * 60000;
				break;
				case 's':
					time += time_value * 1000;
				break;
			}
		}
	}

	return time;
}

