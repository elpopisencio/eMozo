#!/bin/bash

DIRECCION="http://localhost:3000/api/"
TIPO=$1

	if [ $TIPO = "GET" ] || [ $TIPO = "g" ]
	then
		echo "GET to $DIRECCION$2"
		echo "curl $DIRECCION$2 2> /dev/null | json_pp" | sh
	fi
	
	if [ $TIPO = "POST" ] || [ $TIPO = "p" ]
	then
		echo $(printf "POST to $DIRECCION$2 with ")$(printf '%s, ' "${@:3}")
		echo $(printf "curl -d \"")$(printf '%s&' "${@:3}")$(printf "\" $DIRECCION$2 2> /dev/null | json_pp") | sh
	fi
	if [ $TIPO = "DELETE" ] || [ $TIPO = "d" ]
	then
		echo "DELETE to $DIRECCION$2"
		echo "curl -X DELETE $DIRECCION$2 2> /dev/null" | sh
	fi
	if [ $TIPO = "PUT" ] || [ $TIPO = "u" ]
	then
		echo $(printf "PUT to $DIRECCION$2 with ")$(printf '%s, ' "${@:3}")
		echo $(printf "curl -X PUT -d \"")$(printf '%s&' "${@:3}")$(printf "\" $DIRECCION$2 2> /dev/null | json_pp") | sh
	fi

