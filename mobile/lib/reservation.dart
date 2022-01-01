import 'package:flutter/material.dart';

import 'package:http/http.dart' as http;
import 'dart:convert' as convert;

class Reservation {
  String id;
  String clientname;
  String datearrivee;
  num nbrnuits;
  num nbrenfants;
  num nbradultes;
  num nbrchambres;

  Reservation({
    required this.id,
    required this.clientname,
    required this.datearrivee,
    required this.nbrnuits,
    required this.nbrenfants,
    required this.nbradultes,
    required this.nbrchambres
} );

  factory Reservation.fromJson(Map<String, dynamic> json){
    return Reservation(
        id:json['id'] ,
        clientname:json['_clientname'],
        datearrivee:json['_datearrivee'],
        nbrnuits:json['_nbrnuits'],
        nbrenfants:json['_nbrenfants'],
        nbradultes:json['_nbradultes'],
        nbrchambres:json['_nbrchambres']
    );
  }
  
}

class reservation extends StatefulWidget{
  @override
  _reservationState createState()=> _reservationState();
}

class _reservationState extends State<reservation> {
  //final String url= "https://10.0.2.2:3000/reservations";

  //final String url= "https://localhost:3000/reservations";

  final String url="https://my-json-server.typicode.com/eya-ghazouani/public-reservations-api/reservations";

  List<dynamic> _reservations=[];

  bool loading = true;
  @override
  void initState (){
    getReservations();
    super.initState();
  }


  Future <void> getReservations() async {
    var response = await http.get(Uri.parse(url));

    if(response.statusCode ==200 ){
      _reservations = convert.jsonDecode(response.body);
      setState(() {
        loading=!loading;
      });

    }else{
      throw Exception('failed to load reservations');
    }
  }

  @override
  Widget build(BuildContext context){
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('Liste des reservations :'),
        backgroundColor: Colors.transparent,

      ) ,
      body: loading ? waitingScreen(): reservationsList()

    );
  }
  Widget waitingScreen(){
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: const <Widget>[
          Text("Loading data..."),
          Padding(padding: EdgeInsets.only(bottom: 25)),
          CircularProgressIndicator()

        ],
      ),
    );
  }
  Widget reservationsList(){
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Text("DATA Ok! ${_reservations[0]}"),
          const Padding(padding: EdgeInsets.only(bottom: 25)),


        ],
      ),

    );
  }
}