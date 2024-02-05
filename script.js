require([
    "esri/layers/FeatureLayer",
    "esri/PopupTemplate",
    "esri/WebScene",
    "esri/views/SceneView",   
    "esri/Camera"
], function( FeatureLayer, Popup,WebScene, SceneView, Camera) {
    var featureLayer1 = new FeatureLayer({
        url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/ACS_10_14_Poverty_by_Age_Boundaries/FeatureServer/2",
        popupTemplate: {title: "{place}",
                        content: "Census Tract: {NAME}: {B17020_calc_pctPovE}% of population whose income in the past 12 months is below poverty level"}
    });
  
    var scene = new WebScene({
        portalItem: {
            id: "4834bafb0611488ab94c86ff92fc46a2",
        }
    });

    var camera = new Camera({
        position: {
            x: -73.99626507507216,
            y: 40.689971542081985, 
            z: 7000
        },
        tilt: 50,
        heading: 0
    });


    var view = new SceneView({
        container: "viewDiv",
        map: scene,
        camera: camera,
        environment: {
            lighting: {
                date: new Date(),
                cameraTrackingEnabled: false
            }
        }
    });
    var countyQuery1 = "County = 'New York County'";
    featureLayer1.definitionExpression = countyQuery1;
    scene.add(featureLayer1);

});
