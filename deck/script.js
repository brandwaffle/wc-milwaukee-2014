(function( $ ) {

	var $animals = $( '#animals' );
	var $pitbulls = $( '#pitbulls' );
	
	function handleClick( e ) {
		e.preventDefault();
		
		var target = e.target;
		var $target = $( target );

		if( 'duck' === target.ID || 'duck' === $target.parent().attr( 'id' ) ) {
			alert( 'duck' );
		} else {
			alert( 'not a duck' );
		}
	}
	
	function handlePitbull( e ) {
		e.preventDefault();
		
		var target = e.target;
		var $target = $( target );

		if( $target.closest( '.human' ).length ) {
			$target.siblings( '.overlay' ).show().delay(1000).fadeOut( 'slow' );
		} else {
			$target.siblings( '.overlay' ).show().delay(1000).fadeOut( 'slow' );
		}
	}

	
	$( document ).ready(function() {
		$animals.on( 'click', handleClick );
		$pitbulls.on( 'click', handlePitbull );
	});
	

}( jQuery ));

function handleClick( e ) {
	console.log('I am the global handleClick function');
}