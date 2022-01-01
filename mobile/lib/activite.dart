import 'package:flutter/material.dart';
class activite extends StatefulWidget{
  @override
  _activiteState createState()=> _activiteState();
}

class _activiteState extends State<activite> {
  @override
  Widget build(BuildContext context){
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('Liste des activités :'),
        backgroundColor: Colors.transparent,

      ) ,
      body:new  Center (
        child: new Text("This is activity page"),
      ),
    );
  }
}