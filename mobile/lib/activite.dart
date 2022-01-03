import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

void main() => runApp(MyAppActivities());

List<activite> postFromJson(String str) =>
    List<activite>.from(json.decode(str).map((x) => activite.fromMap(x)));

class activite {
  int id;
  String nom_activite;
  String date_activite;

  activite(
      {required this.id,
      required this.nom_activite,
      required this.date_activite});

  factory activite.fromMap(Map<String, dynamic> json) => activite(
        id: json["id"],
        nom_activite: json["nom_activite"],
        date_activite: json["date_activite"],
      );
}

Future<List<activite>> fetchActivite() async {
  final response = await http.get(Uri.parse(
      'https://my-json-server.typicode.com/mariem-fatnassi/activite/activites'));

  if (response.statusCode == 200) {
    final parsed = json.decode(response.body).cast<Map<String, dynamic>>();

    return parsed.map<activite>((json) => activite.fromMap(json)).toList();
  } else {
    throw Exception('Failed to load activity');
  }
}

class MyAppActivities extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyAppActivities> {
  late Future<List<activite>> futureActivities;

  @override
  void initState() {
    super.initState();
    futureActivities = fetchActivite();
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
              child: Text(
                'Liste des activites :',
                style: TextStyle(
                  color: Colors.black,
                ),
              ),
            ),
            centerTitle: true,
            backgroundColor: Colors.transparent,
          ),
          body: new Container(
            child: new FutureBuilder<List<activite>>(
              future: futureActivities,
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
                              "Id de l'activité : " +
                                  "${snapshot.data![index].id}",
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 18.0,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                            SizedBox(height: 10),
                            Text(
                              "nom de l'activité : " +
                                  "${snapshot.data![index].nom_activite}",
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 18.0,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                            SizedBox(height: 10),
                            Text(
                              "date de l'activité : " +
                                  "${snapshot.data![index].date_activite}",
                              style: TextStyle(
                                color: Colors.white,
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
