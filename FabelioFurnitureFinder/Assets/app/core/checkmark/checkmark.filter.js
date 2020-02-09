angular.
    module('core').
    filter('checkmark', function () {
        return function (input, furStyle, furTime) {
            var furnitures = {
                furStyleVal: furStyle,
                furTimeVal: furTime,
                out:[]
            };

            
            angular.forEach(input, function (value, key) {
                var isFilter = true;
                
                ////filter for furnitureStyle
                if (this.furStyleVal != undefined ) {
                    if (this.furStyleVal != "") {
                        var styleList = value.furniture_style;
                        var styleTarget = this.furStyleVal;

                        for (i = 0; i < styleTarget.length; i++) {
                            for (j = 0; j < styleList.length; j++) {
                                if (styleList[i] == styleTarget[j]) {
                                    isFilter = true;
                                    break;
                                } else {
                                    isFilter = false;
                                }

                            }

                        }
                    }    
                }

                /////filter for deliveryTime
                var deliveryTime = parseInt(value.delivery_time);
                if (this.furTimeVal != undefined ) {
                    if (this.furTimeVal != "") {
                        if (this.furTimeVal[this.furTimeVal.length - 1] == "1 Week") {
                            if (deliveryTime > 7)
                                isFilter = false
                        } else if (this.furTimeVal[this.furTimeVal.length - 1] == "2 Week") {
                            if (deliveryTime > 14 || deliveryTime <= 7)
                                isFilter = false
                        } else if (this.furTimeVal[this.furTimeVal.length - 1] == "1 Month") {
                            if (deliveryTime > 30 || deliveryTime <= 14)
                                isFilter = false
                        } else {
                            if (deliveryTime <= 30)
                                isFilter = false;
                        }
                    }
                    
                }

                if (isFilter) 
                    this.out.push(value);

            }, furnitures);

            //send first and next list
            if (furnitures.out.length == 0)
                return input;
            else
                return furnitures.out;
        };
    });
