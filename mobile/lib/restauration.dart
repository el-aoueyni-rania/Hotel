import 'package:flutter/material.dart';
class restauration extends StatefulWidget{
  @override
  _restaurationState createState()=> _restaurationState();
}

class _restaurationState extends State<restauration> {
  @override
  Widget build(BuildContext context){
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('Liste des restaurations :'),
        backgroundColor: Colors.transparent,

      ) ,
      body:new  Center (
        child: new Text("This is restaurations page"),
      ),
    );
  }
}