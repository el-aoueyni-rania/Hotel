import 'package:flutter/material.dart';
class reservation extends StatefulWidget{
  @override
  _reservationState createState()=> _reservationState();
}

class _reservationState extends State<reservation> {
  @override
  Widget build(BuildContext context){
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('Liste des reservations :'),
        backgroundColor: Colors.transparent,

      ) ,
      body:new  Center (
        child: new Text("This is reservation page"),
      ),
    );
  }
}