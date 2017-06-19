


// Apply factory to String
// #
!(function( window, String, undefined )
{
    "use strict";
 
    /**
     *
     * @constructor
     */
    function Factory( tc ) {

        this.tc = tc;
        return this.test();
    };

    
    /**
     * @method charAt: returns char from desired
     * index in string
     */
    Factory.prototype.helpers = {

        /**
         * 
         * @desc
         * @param {Number} index 
         */
        charAt: function( index ) {
            return ( Factory.prototype.tc + "" ).charAt( index );
        },

        /**
         * 
         * @desc
         * @param {String} str 
         */
        toInt: function( str ) {
            return parseInt( str )
        },

        /**
         * 
         * @desc
         * @param {Number} num 
         */
        toStr: function( num ) {
            return "" + num;
        },

        /**
         * @desc
         * @param {String} str
         * @param {Number} startIndex 
         * @param {Number} increaseAmount 
         * @param {Number} iterationCount 
         * @returns {String}
         */
        takeChars: function( str, startIndex, increaseAmount, iterationCount ) {

            var charlist = []
              , desIndex = startIndex
              , firstchar = true
              , temp = null;


            for( var i = 0, j = startIndex; i <= str.length - 1; i++, j = j + increaseAmount ) {

                if( charlist.length == iterationCount ) break;

                // Store char
                // #
                charlist.push( str[ j ] );
            }

            return charlist;
        },

        /**
         * 
         * @desc
         * @param {Array:Number}
         */
        arraySum: function( arr ) {
            
            var self = this;

            // It returns sum of target array
            // #
            return arr.reduce( function( a, b ) {
                return self.toInt( a ) + self.toInt( b )
            });
        }
    };

    /**
     * 
     * @desc this method will testing "tck" algorithm
     * with a given tck number
     * @returns {number}
     */
    Factory.prototype.test = function() {

        var charAt = this.helpers.charAt
          , charAt10 = null
          , charAt11;

        // Check first number for zero
        // #
        if( charAt( 0 ) == "0" || this.tc.length != 11 )
            return false;

        // Look tenth char from tck
        // #
        charAt10 = this.checkAt10();
       
        if( charAt10.fail )
            return false;

        // Check eleventh char
        // #
        charAt11 = this.checkAt11( charAt10.val );
        
        if( !charAt11 )
            return false;

        return true;
    };

    /**
     * @desc
     * @returns {object}
     * {Boolean} object.fail
     * {String}  object.val
     */
    Factory.prototype.checkAt10 = function() {

        var part1 = null
          , part2 = null
          , temp = null
          , fail = false
          , tc = this.tc
          , toInt = this.helpers.toInt
          , toStr = this.helpers.toStr;
          

          part1 = this.helpers.arraySum( 
                  this.helpers.takeChars( tc, 0, 2, 5 ) ) * 7;

          part2 = this.helpers.arraySum( 
                  this.helpers.takeChars( tc, 1, 2, 4 ) ) ;
          
          temp = toStr( ( part1 - part2 ) % 10 );


          if( temp != tc[ 9 ])
            fail = true;

        return {
            fail: fail,
            val: temp
        }
    };

    /**
     * @desc
     * @param {String} charAt10 
     * @returns {Boolean}
     */
    Factory.prototype.checkAt11 = function( charAt10 ) {
        
        var tc = this.tc
          , temp = null
          , success = true
          , toInt = this.helpers.toInt
          , toStr = this.helpers.toStr;

        // Get first 10 letter from tc
        // #
        temp = this.helpers.takeChars( tc, 0, 1, 9 );
        
        // Append calculated letter 
        // #
        temp.push( charAt10 );

        // Get eleventh char
        // #
        temp = this.helpers.arraySum( temp ) % 10;
        
        if( temp != tc[ 10 ] )
            success = false;

        return success;
    };

    /**
     * Proto factory method
     */
    function Proto_tcValid() {
        return Factory.call( Factory.prototype, this );
    }

    // Apply factory to string proto
    // #
    String.prototype.tcValid = Proto_tcValid;

    // If we're running under Node, export
    // for testing purposes
    if( typeof exports !== 'undefined' )
        module.exports = Factory;

})( typeof window != 'undefined' ? window : 'window', String, undefined );



