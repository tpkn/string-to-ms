/*!
 * String To Milliseconds (v1.0.3.20171210), http://tpkn.me/
 */

module.exports = str => {
   let summ = 0;
   let time_type, time_value;
   let time_list = ('' + str).split(' ').filter(v => v != '' && /^(\d{1,}\.)?\d{1,}([wdhms])?$/i.test(v));

   for(let i = 0, len = time_list.length; i < len; i++){
      time = time_list[i];
      time_type = time.match(/[wdhms]$/i);

      if(time_type){
         console.log(time_type);
         time_value = Number(time.replace(time_type[0], ''));

         switch(time_type[0].toLowerCase()){
            case 'w':
               summ += time_value * 604800000;
            break;
            case 'd':
               summ += time_value * 86400000;
            break;
            case 'h':
               summ += time_value * 3600000;
            break;
            case 'm':
               summ += time_value * 60000;
            break;
            case 's':
               summ += time_value * 1000;
            break;
         }
      }else if(!isNaN(parseFloat(time)) && isFinite(time)){
         summ += parseFloat(time);
      }
   }
   return summ;
}
