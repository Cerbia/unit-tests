const formatDate = (timeInSeconds) => {
	if(!timeInSeconds) {
		return '0s';
	}

	var hour = Math.floor(timeInSeconds / 3600);
    var min = Math.floor((timeInSeconds % 3600)/60);
    var sec = timeInSeconds % 60;

    if(hour===0) {
    	if(min===0){
    		if(sec===0) {
    			return '0s';
    		}
    		return `${timeInSeconds}s`;
    	}
    	if(sec===0) {
			return `${min}m`;
		}
		return `${min}m ${sec}s`;
    } 
    else {
    	if(min===0) {
    		if(sec===0) {
    			return `${hour}h`;
    		}
    		return `${hour}h ${sec}s`;
    	} else {
    		if(sec===0) {
    			return `${hour}h ${min}m`;
    		}
    		return `${hour}h ${min}m ${sec}s`;
    	}
    }
}

module.exports = formatDate;