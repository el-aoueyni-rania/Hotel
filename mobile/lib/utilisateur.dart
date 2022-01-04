import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

void main() => runApp(MyAppUtilisateurs());

List<utilisateur> postFromJson(String str) => List<utilisateur>.from(
    json.decode(str).map((x) => utilisateur.fromMap(x)));

class utilisateur {
  int id;
  String name;
  String email;
  String password;
	String role;
 

  utilisateur({
    required this.id,
    required this.name,
    required this.email,
    required this.password,
    required this.role,
  });

  factory utilisateur.fromMap(Map<String, dynamic> json) => utilisateur(
        id: json["id"],
        name: json["name"],
        email: json["email"],
        password: json["password"],
        role: json["role"],
      );
}

Future<List<utilisateur>> fetchUtilisateur() async {
  final response =
      await http.get(Uri.parse('http://192.168.43.174:8089/utilisateurs'));

  if (response.statusCode == 200) {
    final parsed = json.decode(response.body).cast<Map<String, dynamic>>();

    return parsed
        .map<utilisateur>((json) => utilisateur.fromMap(json))
        .toList();
  } else {
    throw Exception('Failed to load utilisateurs');
  }
}

class MyAppUtilisateurs extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyAppUtilisateurs> {
  late Future<List<utilisateur>> futureUtilisateurs;

  @override
  void initState() {
    super.initState();
    futureUtilisateurs = fetchUtilisateur();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
          primaryColor: Colors.blueGrey,
        ),
        home: Scaffold(
          appBar: AppBar(
            title: Container(
              child: Text('Liste des utilisateurs :' , style: TextStyle(
                                color: Colors.black,
                              ), ),
            ),
            centerTitle: true,
            backgroundColor: Colors.transparent,
          ),
          body: new Container(
            child: new FutureBuilder<List<utilisateur>>(
              future: futureUtilisateurs,
              builder: (context, snapshot) {
                if (snapshot.hasData) {
                  return ListView.builder(
                    itemCount: snapshot.data!.length,
                    itemBuilder: (_, index) => Container(
                      child: Container(
                        margin:
                            EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                        padding: EdgeInsets.all(20.0),
                        decoration: BoxDecoration(
                          color: Color(0xff264e70),
                          borderRadius: BorderRadius.circular(15.0),
                        ),
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              "Id utilisateur : " +
                                  "${snapshot.data![index].id}",
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 18.0,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                            SizedBox(height: 10),
                            Text(
                              "nom utilisateur : " +
                                  "${snapshot.data![index].name}",
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 18.0,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                            SizedBox(height: 10),
                             Text(
                              "email utilisateur : " +
                                  "${snapshot.data![index].email}",
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 18.0,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                            SizedBox(height: 10),
                          
                          
                          
                          
                          ],
                        ),
                      ),
                    ),
                  );
                } else {
                  return Center(child: CircularProgressIndicator());
                }
              },
            ),
          ),
        ));
  }
}
