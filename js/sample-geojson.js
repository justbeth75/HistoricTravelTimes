var freeBus = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-75.20341892242432, 42.75383843460583],
                    [-75.2008225440979, 42.751891803969535]
                ]
            },
            "properties": {
                "popupContent": "This is free bus that will take you across downtown.",
                "underConstruction": false
            },
            "id": 1
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-75.0008225440979, 40.751891803969535],
                    [-74.99820470809937, 45.74979664004068]
                ]
            },
            "properties": {
                "popupContent": "This is free bus that will take you across downtown.",
                "underConstruction": true
            },
            "id": 2
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-74.99820470809937, 41.74979664004068],
                    [-74.98689651489258, 41.741052354709055]
                ]
            },
            "properties": {
                "popupContent": "This is free bus that will take you across downtown.",
                "underConstruction": false
            },
            "id": 3
        }
    ]
};

var lightRailStop = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "popupContent": "18th & California Light Rail Stop"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-74.98999178409576, 39.74683938093904]
            }
        },{
            "type": "Feature",
            "properties": {
                "popupContent": "20th & Welton Light Rail Stop"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-74.98689115047453, 39.747924136466565]
            }
        }
    ]
};

var bicycleRental = {
    "type": "FeatureCollection",
    "features": [
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -74.85,
                    41.9471494
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is a B-Cycle Station. Come pick up a bike and pay by the hour. What a deal!"
            },
            "id": 51
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -74.80,
                    41.7477264
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is a B-Cycle Station. Come pick up a bike and pay by the hour. What a deal!"
            },
            "id": 57
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -74.92,
                    42.9432392
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is a B-Cycle Station. Come pick up a bike and pay by the hour. What a deal!"
            },
            "id": 58
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -74.9788452,
                    42.6933755
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is a B-Cycle Station. Come pick up a bike and pay by the hour. What a deal!"
            },
            "id": 74
        }
    ]
};

var dayOne = {
    "type": "Feature",
    "properties": {
        "popupContent": "1 day",
        "style": {
            weight: 2,
            color: "#999",
            opacity: 0.5,
            fillColor: "#9E286E",
            fillOpacity: 0.5
        }
    },
    "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
            [
                [
                    [ -73.98, 41.25 ], [ -73.97, 41.22 ], [ -73.96, 41.21 ], [ -73.95, 41.19 ], [ -73.93, 41.18 ], [ -73.92, 41.16 ], [ -73.92, 41.15 ], [ -73.92, 41.1 ], [ -73.91, 41.02 ], [ -73.91, 40.99 ], [ -73.91, 40.97 ], [ -73.92, 40.93 ], [ -73.95, 40.86 ], [ -73.99, 40.8 ], [ -74.01, 40.78 ], [ -74.01, 40.77 ], [ -74.02, 40.75 ], [ -74.02, 40.74 ], [ -74.03, 40.73 ], [ -74.03, 40.71 ], [ -74.05, 40.7 ], [ -74.07, 40.69 ], [ -74.09, 40.67 ], [ -74.1, 40.65 ], [ -74.11, 40.65 ], [ -74.13, 40.65 ], [ -74.14, 40.65 ], [ -74.14, 40.66 ], [ -74.11, 40.71 ], [ -74.11, 40.72 ], [ -74.13, 40.7 ], [ -74.13, 40.69 ], [ -74.14, 40.68 ], [ -74.15, 40.66 ], [ -74.16, 40.66 ], [ -74.18, 40.65 ], [ -74.19, 40.65 ], [ -74.21, 40.63 ], [ -74.22, 40.59 ], [ -74.22, 40.57 ], [ -74.23, 40.57 ], [ -74.25, 40.56 ], [ -74.26, 40.55 ], [ -74.26, 40.54 ], [ -74.26, 40.51 ], [ -74.27, 40.5 ], [ -74.28, 40.5 ], [ -74.27, 40.48 ], [ -74.26, 40.46 ], [ -74.22, 40.45 ], [ -74.21, 40.44 ], [ -74.2, 40.44 ], [ -74.15, 40.45 ], [ -74.12, 40.45 ], [ -74.03, 40.42 ], [ -73.99, 40.4 ], [ -73.99, 40.41 ], [ -74.0, 40.42 ], [ -74.0, 40.44 ], [ -74.02, 40.48 ], [ -73.99, 40.47 ], [ -73.98, 40.45 ], [ -73.98, 40.43 ], [ -73.97, 40.39 ], [ -73.97, 40.33 ], [ -73.98, 40.28 ], [ -73.99, 40.23 ], [ -74.01, 40.17 ], [ -74.02, 40.14 ], [ -74.03, 40.11 ], [ -74.03, 40.08 ], [ -74.04, 40.05 ], [ -74.04, 40.03 ], [ -74.05, 40.0 ], [ -74.06, 39.95 ], [ -74.06, 39.93 ], [ -74.07, 39.9 ], [ -74.07, 39.88 ], [ -74.09, 39.78 ], [ -74.1, 39.78 ], [ -74.08, 39.92 ], [ -74.07, 39.97 ], [ -74.07, 39.99 ], [ -74.06, 40.01 ], [ -74.05, 40.04 ], [ -74.05, 40.05 ], [ -74.06, 40.06 ], [ -74.08, 40.05 ], [ -74.08, 40.04 ], [ -74.07, 40.04 ], [ -74.06, 40.03 ], [ -74.08, 40.03 ], [ -74.08, 40.01 ], [ -74.1, 40.01 ], [ -74.11, 40.0 ], [ -74.12, 40.0 ], [ -74.13, 39.98 ], [ -74.11, 39.99 ], [ -74.1, 39.97 ], [ -74.11, 39.95 ], [ -74.13, 39.93 ], [ -74.11, 39.93 ], [ -74.11, 39.92 ], [ -74.13, 39.91 ], [ -74.14, 39.89 ], [ -74.13, 39.87 ], [ -74.13, 39.86 ], [ -74.13, 39.85 ], [ -74.15, 39.83 ], [ -74.17, 39.81 ], [ -74.19, 39.77 ], [ -74.19, 39.74 ], [ -74.16, 39.74 ], [ -74.16, 39.72 ], [ -74.17, 39.7 ], [ -74.17, 39.7 ], [ -74.18, 39.69 ], [ -74.2, 39.68 ], [ -74.21, 39.65 ], [ -74.24, 39.64 ], [ -74.25, 39.63 ], [ -74.25, 39.62 ], [ -74.26, 39.61 ], [ -74.28, 39.61 ], [ -74.29, 39.61 ], [ -74.31, 39.59 ], [ -74.32, 39.59 ], [ -74.32, 39.59 ], [ -74.32, 39.59 ], [ -74.32, 39.59 ], [ -74.32, 39.59 ], [ -74.32, 39.59 ], [ -74.32, 39.59 ], [ -74.32, 39.59 ], [ -74.32, 39.59 ], [ -74.32, 39.59 ], [ -74.32, 39.59 ], [ -74.32, 39.59 ], [ -74.32, 39.59 ], [ -74.33, 39.59 ], [ -74.33, 39.59 ], [ -74.33, 39.59 ], [ -74.33, 39.59 ], [ -74.33, 39.59 ], [ -74.33, 39.59 ], [ -74.33, 39.59 ], [ -74.33, 39.59 ], [ -74.33, 39.59 ], [ -74.33, 39.59 ], [ -74.33, 39.59 ], [ -74.33, 39.59 ], [ -74.33, 39.59 ], [ -74.33, 39.59 ], [ -74.33, 39.59 ], [ -74.33, 39.59 ], [ -74.33, 39.59 ], [ -74.34, 39.59 ], [ -74.34, 39.59 ], [ -74.34, 39.59 ], [ -74.34, 39.59 ], [ -74.34, 39.59 ], [ -74.34, 39.59 ], [ -74.34, 39.59 ], [ -74.34, 39.59 ], [ -74.34, 39.59 ], [ -74.34, 39.59 ], [ -74.34, 39.59 ], [ -74.34, 39.59 ], [ -74.34, 39.59 ], [ -74.34, 39.59 ], [ -74.34, 39.59 ], [ -74.34, 39.59 ], [ -74.34, 39.59 ], [ -74.35, 39.59 ], [ -74.35, 39.59 ], [ -74.35, 39.59 ], [ -74.35, 39.59 ], [ -74.36, 39.59 ], [ -74.38, 39.59 ], [ -74.4, 39.59 ], [ -74.41, 39.59 ], [ -74.43, 39.59 ], [ -74.45, 39.59 ], [ -74.46, 39.59 ], [ -74.48, 39.59 ], [ -74.5, 39.59 ], [ -74.52, 39.6 ], [ -74.53, 39.6 ], [ -74.55, 39.6 ], [ -74.57, 39.6 ], [ -74.59, 39.6 ], [ -74.61, 39.61 ], [ -74.63, 39.61 ], [ -74.65, 39.61 ], [ -74.66, 39.62 ], [ -74.68, 39.62 ], [ -74.7, 39.62 ], [ -74.72, 39.63 ], [ -74.74, 39.63 ], [ -74.76, 39.63 ], [ -74.78, 39.64 ], [ -74.8, 39.64 ], [ -74.82, 39.65 ], [ -74.84, 39.65 ], [ -74.86, 39.65 ], [ -74.88, 39.66 ], [ -74.9, 39.66 ], [ -74.92, 39.67 ], [ -74.94, 39.68 ], [ -74.96, 39.68 ], [ -74.98, 39.69 ], [ -75.0, 39.69 ], [ -75.02, 39.7 ], [ -75.05, 39.71 ], [ -75.07, 39.71 ], [ -75.09, 39.72 ], [ -75.11, 39.73 ], [ -75.13, 39.73 ], [ -75.15, 39.74 ], [ -75.17, 39.75 ], [ -75.19, 39.76 ], [ -75.21, 39.77 ], [ -75.23, 39.78 ], [ -75.25, 39.78 ], [ -75.27, 39.79 ], [ -75.31, 39.81 ], [ -75.31, 39.81 ], [ -75.31, 39.81 ], [ -75.31, 39.81 ], [ -75.31, 39.81 ], [ -75.32, 39.81 ], [ -75.32, 39.81 ], [ -75.32, 39.81 ], [ -75.32, 39.82 ], [ -75.32, 39.82 ], [ -75.32, 39.82 ], [ -75.32, 39.82 ], [ -75.32, 39.82 ], [ -75.32, 39.82 ], [ -75.32, 39.82 ], [ -75.32, 39.82 ], [ -75.32, 39.82 ], [ -75.32, 39.82 ], [ -75.33, 39.82 ], [ -75.33, 39.82 ], [ -75.33, 39.82 ], [ -75.33, 39.82 ], [ -75.33, 39.82 ], [ -75.33, 39.82 ], [ -75.33, 39.82 ], [ -75.33, 39.82 ], [ -75.33, 39.82 ], [ -75.33, 39.82 ], [ -75.33, 39.82 ], [ -75.33, 39.82 ], [ -75.33, 39.82 ], [ -75.33, 39.82 ], [ -75.34, 39.82 ], [ -75.34, 39.82 ], [ -75.34, 39.82 ], [ -75.34, 39.82 ], [ -75.34, 39.83 ], [ -75.34, 39.83 ], [ -75.34, 39.83 ], [ -75.34, 39.83 ], [ -75.34, 39.83 ], [ -75.34, 39.83 ], [ -75.34, 39.83 ], [ -75.34, 39.83 ], [ -75.34, 39.83 ], [ -75.34, 39.83 ], [ -75.35, 39.83 ], [ -75.35, 39.83 ], [ -75.35, 39.83 ], [ -75.35, 39.83 ], [ -75.35, 39.83 ], [ -75.35, 39.83 ], [ -75.35, 39.83 ], [ -75.31, 39.84 ], [ -75.27, 39.85 ], [ -75.25, 39.85 ], [ -75.23, 39.85 ], [ -75.19, 39.87 ], [ -75.17, 39.87 ], [ -75.17, 39.87 ], [ -75.17, 39.87 ], [ -75.16, 39.88 ], [ -75.14, 39.87 ], [ -75.13, 39.88 ], [ -75.11, 39.9 ], [ -75.1, 39.91 ], [ -75.11, 39.92 ], [ -75.12, 39.94 ], [ -75.12, 39.95 ], [ -75.1, 39.95 ], [ -75.09, 39.96 ], [ -75.08, 39.95 ], [ -75.04, 40.0 ], [ -75.02, 40.02 ], [ -75.05, 40.01 ], [ -75.08, 39.99 ], [ -75.1, 39.98 ], [ -75.12, 39.97 ], [ -75.13, 39.96 ], [ -75.14, 39.93 ], [ -75.13, 39.91 ], [ -75.15, 39.9 ], [ -75.21, 39.89 ], [ -75.25, 39.87 ], [ -75.27, 39.86 ], [ -75.3, 39.87 ], [ -75.36, 39.85 ], [ -75.38, 39.85 ], [ -75.38, 39.84 ], [ -75.39, 39.85 ], [ -75.41, 39.86 ], [ -75.42, 39.87 ], [ -75.44, 39.87 ], [ -75.45, 39.88 ], [ -75.47, 39.89 ], [ -75.48, 39.89 ], [ -75.49, 39.9 ], [ -75.5, 39.91 ], [ -75.51, 39.91 ], [ -75.52, 39.92 ], [ -75.53, 39.92 ], [ -75.54, 39.93 ], [ -75.55, 39.94 ], [ -75.56, 39.94 ], [ -75.57, 39.95 ], [ -75.58, 39.95 ], [ -75.59, 39.96 ], [ -75.59, 39.96 ], [ -75.6, 39.97 ], [ -75.61, 39.97 ], [ -75.62, 39.98 ], [ -75.62, 39.98 ], [ -75.63, 39.99 ], [ -75.63, 39.99 ], [ -75.64, 40.0 ], [ -75.65, 40.0 ], [ -75.65, 40.01 ], [ -75.66, 40.01 ], [ -75.66, 40.02 ], [ -75.67, 40.02 ], [ -75.67, 40.03 ], [ -75.68, 40.04 ], [ -75.68, 40.04 ], [ -75.69, 40.05 ], [ -75.69, 40.05 ], [ -75.7, 40.06 ], [ -75.71, 40.07 ], [ -75.71, 40.07 ], [ -75.72, 40.08 ], [ -75.72, 40.09 ], [ -75.73, 40.1 ], [ -75.73, 40.1 ], [ -75.74, 40.11 ], [ -75.75, 40.12 ], [ -75.75, 40.13 ], [ -75.76, 40.14 ], [ -75.77, 40.15 ], [ -75.78, 40.17 ], [ -75.78, 40.17 ], [ -75.79, 40.18 ], [ -75.79, 40.19 ], [ -75.8, 40.2 ], [ -75.8, 40.21 ], [ -75.81, 40.22 ], [ -75.81, 40.22 ], [ -75.81, 40.23 ], [ -75.81, 40.24 ], [ -75.8, 40.25 ], [ -75.8, 40.26 ], [ -75.8, 40.27 ], [ -75.79, 40.28 ], [ -75.79, 40.28 ], [ -75.78, 40.29 ], [ -75.77, 40.3 ], [ -75.76, 40.31 ], [ -75.75, 40.31 ], [ -75.74, 40.32 ], [ -75.73, 40.33 ], [ -75.72, 40.33 ], [ -75.71, 40.34 ], [ -75.69, 40.35 ], [ -75.68, 40.35 ], [ -75.67, 40.36 ], [ -75.65, 40.37 ], [ -75.64, 40.37 ], [ -75.62, 40.38 ], [ -75.6, 40.38 ], [ -75.58, 40.39 ], [ -75.57, 40.4 ], [ -75.55, 40.4 ], [ -75.53, 40.41 ], [ -75.51, 40.41 ], [ -75.49, 40.42 ], [ -75.47, 40.43 ], [ -75.45, 40.43 ], [ -75.43, 40.44 ], [ -75.41, 40.44 ], [ -75.39, 40.45 ], [ -75.37, 40.46 ], [ -75.35, 40.46 ], [ -75.33, 40.47 ], [ -75.3, 40.47 ], [ -75.28, 40.48 ], [ -75.26, 40.49 ], [ -75.24, 40.49 ], [ -75.22, 40.5 ], [ -75.2, 40.51 ], [ -75.15, 40.52 ], [ -75.15, 40.52 ], [ -75.13, 40.53 ], [ -75.11, 40.54 ], [ -75.09, 40.55 ], [ -75.07, 40.55 ], [ -75.05, 40.56 ], [ -75.03, 40.57 ], [ -75.01, 40.58 ], [ -75.0, 40.59 ], [ -74.98, 40.6 ], [ -74.96, 40.61 ], [ -74.94, 40.63 ], [ -74.92, 40.64 ], [ -74.91, 40.65 ], [ -74.89, 40.66 ], [ -74.87, 40.67 ], [ -74.86, 40.68 ], [ -74.84, 40.7 ], [ -74.83, 40.71 ], [ -74.81, 40.72 ], [ -74.8, 40.73 ], [ -74.78, 40.75 ], [ -74.77, 40.76 ], [ -74.75, 40.77 ], [ -74.74, 40.79 ], [ -74.73, 40.8 ], [ -74.71, 40.81 ], [ -74.7, 40.83 ], [ -74.69, 40.84 ], [ -74.67, 40.85 ], [ -74.66, 40.87 ], [ -74.65, 40.88 ], [ -74.64, 40.89 ], [ -74.63, 40.9 ], [ -74.61, 40.92 ], [ -74.6, 40.93 ], [ -74.59, 40.94 ], [ -74.58, 40.95 ], [ -74.57, 40.96 ], [ -74.56, 40.98 ], [ -74.55, 40.99 ], [ -74.54, 41.0 ], [ -74.53, 41.01 ], [ -74.52, 41.02 ], [ -74.51, 41.03 ], [ -74.5, 41.04 ], [ -74.49, 41.05 ], [ -74.48, 41.06 ], [ -74.47, 41.07 ], [ -74.45, 41.08 ], [ -74.45, 41.08 ], [ -74.44, 41.09 ], [ -74.44, 41.09 ], [ -74.43, 41.1 ], [ -74.42, 41.11 ], [ -74.41, 41.11 ], [ -74.41, 41.12 ], [ -74.4, 41.13 ], [ -74.39, 41.13 ], [ -74.38, 41.14 ], [ -74.38, 41.14 ], [ -74.37, 41.15 ], [ -74.36, 41.15 ], [ -74.36, 41.16 ], [ -74.35, 41.17 ], [ -74.34, 41.17 ], [ -74.34, 41.18 ], [ -74.33, 41.18 ], [ -74.32, 41.18 ], [ -74.31, 41.19 ], [ -74.31, 41.19 ], [ -74.3, 41.2 ], [ -74.29, 41.2 ], [ -74.28, 41.21 ], [ -74.28, 41.21 ], [ -74.27, 41.21 ], [ -74.26, 41.22 ], [ -74.25, 41.22 ], [ -74.24, 41.22 ], [ -74.24, 41.23 ], [ -74.23, 41.23 ], [ -74.22, 41.23 ], [ -74.21, 41.23 ], [ -74.2, 41.24 ], [ -74.19, 41.24 ], [ -74.18, 41.24 ], [ -74.17, 41.24 ], [ -74.16, 41.24 ], [ -74.15, 41.25 ], [ -74.13, 41.25 ], [ -74.12, 41.25 ], [ -74.11, 41.25 ], [ -74.1, 41.25 ], [ -74.08, 41.25 ], [ -74.07, 41.25 ], [ -74.06, 41.25 ], [ -74.04, 41.25 ], [ -74.03, 41.25 ], [ -74.01, 41.25 ], [ -73.98, 41.25 ], [ -73.98, 41.25 ] ], [ [ -72.83, 40.75 ], [ -72.88, 40.73 ], [ -72.91, 40.72 ], [ -72.95, 40.72 ], [ -73.01, 40.69 ], [ -73.04, 40.68 ], [ -73.1, 40.67 ], [ -73.18, 40.65 ], [ -73.22, 40.64 ], [ -73.26, 40.63 ], [ -73.31, 40.63 ], [ -73.3, 40.62 ], [ -73.25, 40.62 ], [ -73.15, 40.64 ], [ -73.04, 40.67 ], [ -72.99, 40.69 ], [ -72.91, 40.71 ], [ -72.83, 40.74 ], [ -72.8, 40.75 ], [ -72.76, 40.76 ], [ -72.76, 40.77 ], [ -72.78, 40.77 ], [ -72.83, 40.75 ] ], [ [ -74.18, 39.62 ], [ -74.15, 39.67 ], [ -74.13, 39.7 ], [ -74.11, 39.73 ], [ -74.1, 39.76 ], [ -74.11, 39.75 ], [ -74.12, 39.74 ], [ -74.13, 39.71 ], [ -74.16, 39.69 ], [ -74.23, 39.58 ], [ -74.23, 39.58 ], [ -74.23, 39.58 ], [ -74.23, 39.58 ], [ -74.23, 39.58 ], [ -74.23, 39.58 ], [ -74.23, 39.58 ], [ -74.23, 39.58 ], [ -74.23, 39.58 ], [ -74.23, 39.58 ], [ -74.23, 39.58 ], [ -74.23, 39.58 ], [ -74.23, 39.58 ], [ -74.23, 39.58 ], [ -74.23, 39.58 ], [ -74.23, 39.58 ], [ -74.23, 39.58 ], [ -74.22, 39.58 ], [ -74.22, 39.58 ], [ -74.22, 39.58 ], [ -74.22, 39.58 ], [ -74.22, 39.58 ], [ -74.22, 39.58 ], [ -74.22, 39.58 ], [ -74.22, 39.58 ], [ -74.22, 39.58 ], [ -74.22, 39.58 ], [ -74.22, 39.58 ], [ -74.22, 39.58 ], [ -74.22, 39.58 ], [ -74.22, 39.58 ], [ -74.22, 39.58 ], [ -74.22, 39.58 ], [ -74.22, 39.58 ], [ -74.22, 39.58 ], [ -74.22, 39.58 ], [ -74.22, 39.58 ], [ -74.21, 39.58 ], [ -74.21, 39.58 ], [ -74.21, 39.58 ], [ -74.21, 39.58 ], [ -74.21, 39.58 ], [ -74.21, 39.58 ], [ -74.21, 39.58 ], [ -74.21, 39.58 ], [ -74.21, 39.58 ], [ -74.21, 39.58 ], [ -74.21, 39.58 ], [ -74.21, 39.58 ], [ -74.21, 39.58 ], [ -74.21, 39.58 ], [ -74.21, 39.58 ], [ -74.18, 39.62 ] ], [ [ -72.14, 41.1 ], [ -72.14, 41.09 ], [ -72.12, 41.09 ], [ -72.11, 41.09 ], [ -72.1, 41.08 ], [ -72.1, 41.07 ], [ -72.1, 41.05 ], [ -72.09, 41.06 ], [ -72.09, 41.07 ], [ -72.08, 41.07 ], [ -72.08, 41.08 ], [ -72.09, 41.09 ], [ -72.08, 41.09 ], [ -72.08, 41.1 ], [ -72.09, 41.1 ], [ -72.11, 41.11 ], [ -72.13, 41.12 ], [ -72.13, 41.11 ], [ -72.13, 41.1 ], [ -72.14, 41.1 ] ], [ [ -72.3, 41.08 ], [ -72.31, 41.08 ], [ -72.32, 41.09 ], [ -72.33, 41.11 ], [ -72.34, 41.1 ], [ -72.34, 41.09 ], [ -72.36, 41.08 ], [ -72.37, 41.07 ], [ -72.37, 41.05 ], [ -72.36, 41.05 ], [ -72.34, 41.05 ], [ -72.32, 41.05 ], [ -72.3, 41.04 ], [ -72.29, 41.03 ], [ -72.28, 41.03 ], [ -72.28, 41.04 ], [ -72.28, 41.05 ], [ -72.28, 41.06 ], [ -72.28, 41.07 ], [ -72.28, 41.08 ], [ -72.3, 41.08 ] ], [ [ -73.93, 40.84 ], [ -73.92, 40.86 ], [ -73.92, 40.88 ], [ -73.93, 40.88 ], [ -73.93, 40.87 ], [ -73.94, 40.85 ], [ -73.99, 40.78 ], [ -74.0, 40.76 ], [ -74.01, 40.73 ], [ -74.02, 40.7 ], [ -74.0, 40.7 ], [ -73.98, 40.71 ], [ -73.97, 40.73 ], [ -73.97, 40.74 ], [ -73.95, 40.78 ], [ -73.93, 40.8 ], [ -73.94, 40.81 ], [ -73.94, 40.83 ], [ -73.93, 40.84 ] ], [ [ -74.25, 40.51 ], [ -74.25, 40.51 ], [ -74.25, 40.5 ], [ -74.24, 40.5 ], [ -74.23, 40.5 ], [ -74.21, 40.51 ], [ -74.19, 40.51 ], [ -74.18, 40.52 ], [ -74.16, 40.53 ], [ -74.15, 40.53 ], [ -74.14, 40.53 ], [ -74.13, 40.53 ], [ -74.1, 40.55 ], [ -74.05, 40.6 ], [ -74.06, 40.61 ], [ -74.07, 40.62 ], [ -74.07, 40.63 ], [ -74.07, 40.64 ], [ -74.07, 40.64 ], [ -74.08, 40.65 ], [ -74.08, 40.65 ], [ -74.1, 40.64 ], [ -74.11, 40.64 ], [ -74.13, 40.63 ], [ -74.15, 40.64 ], [ -74.17, 40.64 ], [ -74.18, 40.64 ], [ -74.19, 40.63 ], [ -74.19, 40.61 ], [ -74.2, 40.58 ], [ -74.2, 40.57 ], [ -74.21, 40.56 ], [ -74.22, 40.55 ], [ -74.23, 40.55 ], [ -74.24, 40.54 ], [ -74.24, 40.53 ], [ -74.24, 40.52 ], [ -74.25, 40.51 ] ], [ [ -73.25, 40.65 ], [ -73.27, 40.65 ], [ -73.32, 40.65 ], [ -73.34, 40.64 ], [ -73.36, 40.64 ], [ -73.38, 40.63 ], [ -73.4, 40.63 ], [ -73.44, 40.62 ], [ -73.57, 40.59 ], [ -73.57, 40.58 ], [ -73.39, 40.62 ], [ -73.32, 40.64 ], [ -73.26, 40.64 ], [ -73.25, 40.65 ] ], [ [ -73.95, 41.25 ], [ -73.94, 41.24 ], [ -73.91, 41.21 ], [ -73.9, 41.2 ], [ -73.89, 41.19 ], [ -73.88, 41.15 ], [ -73.87, 41.12 ], [ -73.87, 41.03 ], [ -73.88, 41.01 ], [ -73.89, 40.97 ], [ -73.9, 40.93 ], [ -73.92, 40.89 ], [ -73.91, 40.88 ], [ -73.91, 40.87 ], [ -73.92, 40.86 ], [ -73.93, 40.84 ], [ -73.93, 40.83 ], [ -73.93, 40.82 ], [ -73.93, 40.8 ], [ -73.89, 40.8 ], [ -73.87, 40.81 ], [ -73.83, 40.81 ], [ -73.8, 40.81 ], [ -73.81, 40.83 ], [ -73.82, 40.84 ], [ -73.82, 40.86 ], [ -73.81, 40.87 ], [ -73.8, 40.87 ], [ -73.79, 40.87 ], [ -73.78, 40.88 ], [ -73.78, 40.89 ], [ -73.76, 40.91 ], [ -73.72, 40.95 ], [ -73.71, 40.95 ], [ -73.7, 40.95 ], [ -73.68, 40.95 ], [ -73.67, 40.96 ], [ -73.65, 40.98 ], [ -73.65, 40.99 ], [ -73.65, 41.0 ], [ -73.64, 41.0 ], [ -73.63, 41.01 ], [ -73.62, 41.01 ], [ -73.61, 41.01 ], [ -73.6, 41.02 ], [ -73.6, 41.02 ], [ -73.59, 41.01 ], [ -73.56, 41.02 ], [ -73.55, 41.03 ], [ -73.54, 41.03 ], [ -73.52, 41.02 ], [ -73.5, 41.04 ], [ -73.49, 41.05 ], [ -73.47, 41.05 ], [ -73.44, 41.07 ], [ -73.42, 41.08 ], [ -73.38, 41.1 ], [ -73.37, 41.1 ], [ -73.36, 41.11 ], [ -73.35, 41.11 ], [ -73.33, 41.11 ], [ -73.34, 41.12 ], [ -73.35, 41.12 ], [ -73.36, 41.12 ], [ -73.37, 41.13 ], [ -73.38, 41.13 ], [ -73.38, 41.13 ], [ -73.39, 41.14 ], [ -73.4, 41.14 ], [ -73.41, 41.14 ], [ -73.42, 41.15 ], [ -73.43, 41.15 ], [ -73.44, 41.15 ], [ -73.45, 41.16 ], [ -73.46, 41.16 ], [ -73.47, 41.16 ], [ -73.48, 41.16 ], [ -73.49, 41.17 ], [ -73.5, 41.17 ], [ -73.51, 41.17 ], [ -73.52, 41.18 ], [ -73.53, 41.18 ], [ -73.54, 41.18 ], [ -73.55, 41.19 ], [ -73.56, 41.19 ], [ -73.57, 41.19 ], [ -73.58, 41.2 ], [ -73.6, 41.2 ], [ -73.61, 41.2 ], [ -73.62, 41.2 ], [ -73.63, 41.21 ], [ -73.64, 41.21 ], [ -73.65, 41.21 ], [ -73.66, 41.21 ], [ -73.68, 41.22 ], [ -73.69, 41.22 ], [ -73.7, 41.22 ], [ -73.71, 41.22 ], [ -73.73, 41.23 ], [ -73.74, 41.23 ], [ -73.75, 41.23 ], [ -73.76, 41.23 ], [ -73.78, 41.23 ], [ -73.79, 41.24 ], [ -73.8, 41.24 ], [ -73.82, 41.24 ], [ -73.83, 41.24 ], [ -73.84, 41.24 ], [ -73.86, 41.24 ], [ -73.89, 41.25 ], [ -73.89, 41.25 ], [ -73.89, 41.25 ], [ -73.89, 41.25 ], [ -73.89, 41.25 ], [ -73.89, 41.25 ], [ -73.89, 41.25 ], [ -73.89, 41.25 ], [ -73.9, 41.25 ], [ -73.9, 41.25 ], [ -73.9, 41.25 ], [ -73.9, 41.25 ], [ -73.9, 41.25 ], [ -73.9, 41.25 ], [ -73.9, 41.25 ], [ -73.91, 41.25 ], [ -73.91, 41.25 ], [ -73.91, 41.25 ], [ -73.91, 41.25 ], [ -73.91, 41.25 ], [ -73.91, 41.25 ], [ -73.91, 41.25 ], [ -73.91, 41.25 ], [ -73.92, 41.25 ], [ -73.92, 41.25 ], [ -73.92, 41.25 ], [ -73.92, 41.25 ], [ -73.92, 41.25 ], [ -73.92, 41.25 ], [ -73.92, 41.25 ], [ -73.93, 41.25 ], [ -73.93, 41.25 ], [ -73.93, 41.25 ], [ -73.93, 41.25 ], [ -73.93, 41.25 ], [ -73.93, 41.25 ], [ -73.93, 41.25 ], [ -73.93, 41.25 ], [ -73.94, 41.25 ], [ -73.94, 41.25 ], [ -73.94, 41.25 ], [ -73.94, 41.25 ], [ -73.94, 41.25 ], [ -73.94, 41.25 ], [ -73.94, 41.25 ], [ -73.94, 41.25 ], [ -73.95, 41.25 ], [ -73.95, 41.25 ], [ -73.95, 41.25 ], [ -73.95, 41.25 ], [ -73.95, 41.25 ], [ -73.95, 41.25 ] ], [ [ -71.9, 41.08 ], [ -71.93, 41.08 ], [ -71.92, 41.06 ], [ -71.92, 41.06 ], [ -71.93, 41.06 ], [ -71.95, 41.07 ], [ -71.96, 41.07 ], [ -71.96, 41.05 ], [ -71.98, 41.04 ], [ -71.99, 41.05 ], [ -72.01, 41.04 ], [ -72.05, 41.02 ], [ -72.09, 41.0 ], [ -72.11, 41.0 ], [ -72.12, 41.01 ], [ -72.12, 41.02 ], [ -72.16, 41.05 ], [ -72.17, 41.06 ], [ -72.18, 41.05 ], [ -72.18, 41.03 ], [ -72.19, 41.01 ], [ -72.21, 41.04 ], [ -72.23, 41.04 ], [ -72.24, 41.04 ], [ -72.24, 41.03 ], [ -72.25, 41.02 ], [ -72.26, 41.02 ], [ -72.27, 41.0 ], [ -72.3, 41.01 ], [ -72.3, 41.02 ], [ -72.31, 41.04 ], [ -72.32, 41.04 ], [ -72.33, 41.03 ], [ -72.32, 41.01 ], [ -72.33, 41.0 ], [ -72.34, 41.0 ], [ -72.37, 40.99 ], [ -72.39, 40.97 ], [ -72.41, 40.95 ], [ -72.43, 40.95 ], [ -72.44, 40.94 ], [ -72.44, 40.93 ], [ -72.45, 40.92 ], [ -72.46, 40.91 ], [ -72.48, 40.9 ], [ -72.5, 40.9 ], [ -72.52, 40.9 ], [ -72.54, 40.91 ], [ -72.56, 40.91 ], [ -72.58, 40.9 ], [ -72.59, 40.91 ], [ -72.6, 40.91 ], [ -72.61, 40.91 ], [ -72.62, 40.91 ], [ -72.62, 40.93 ], [ -72.6, 40.93 ], [ -72.58, 40.93 ], [ -72.56, 40.94 ], [ -72.54, 40.96 ], [ -72.54, 40.97 ], [ -72.53, 40.97 ], [ -72.52, 40.99 ], [ -72.51, 40.98 ], [ -72.5, 40.99 ], [ -72.49, 40.99 ], [ -72.47, 40.99 ], [ -72.47, 41.0 ], [ -72.45, 41.0 ], [ -72.45, 40.99 ], [ -72.44, 40.98 ], [ -72.43, 40.99 ], [ -72.44, 41.01 ], [ -72.44, 41.02 ], [ -72.44, 41.03 ], [ -72.43, 41.03 ], [ -72.41, 41.03 ], [ -72.39, 41.03 ], [ -72.39, 41.04 ], [ -72.39, 41.05 ], [ -72.4, 41.05 ], [ -72.42, 41.05 ], [ -72.41, 41.06 ], [ -72.34, 41.11 ], [ -72.3, 41.13 ], [ -72.29, 41.11 ], [ -72.28, 41.12 ], [ -72.26, 41.13 ], [ -72.25, 41.14 ], [ -72.24, 41.15 ], [ -72.25, 41.16 ], [ -72.26, 41.16 ], [ -72.28, 41.16 ], [ -72.29, 41.16 ], [ -72.34, 41.14 ], [ -72.36, 41.13 ], [ -72.38, 41.11 ], [ -72.41, 41.09 ], [ -72.45, 41.09 ], [ -72.45, 41.07 ], [ -72.47, 41.06 ], [ -72.54, 41.02 ], [ -72.61, 40.99 ], [ -72.63, 40.98 ], [ -72.7, 40.98 ], [ -72.78, 40.97 ], [ -72.83, 40.97 ], [ -72.9, 40.96 ], [ -73.01, 40.97 ], [ -73.05, 40.96 ], [ -73.08, 40.97 ], [ -73.08, 40.97 ], [ -73.08, 40.96 ], [ -73.08, 40.95 ], [ -73.09, 40.95 ], [ -73.1, 40.95 ], [ -73.1, 40.97 ], [ -73.11, 40.97 ], [ -73.14, 40.97 ], [ -73.15, 40.96 ], [ -73.15, 40.95 ], [ -73.16, 40.93 ], [ -73.18, 40.92 ], [ -73.22, 40.91 ], [ -73.24, 40.91 ], [ -73.24, 40.91 ], [ -73.26, 40.91 ], [ -73.29, 40.92 ], [ -73.33, 40.93 ], [ -73.35, 40.93 ], [ -73.37, 40.94 ], [ -73.38, 40.95 ], [ -73.4, 40.95 ], [ -73.4, 40.95 ], [ -73.41, 40.95 ], [ -73.41, 40.94 ], [ -73.4, 40.93 ], [ -73.38, 40.92 ], [ -73.36, 40.93 ], [ -73.35, 40.91 ], [ -73.36, 40.9 ], [ -73.37, 40.9 ], [ -73.39, 40.91 ], [ -73.41, 40.9 ], [ -73.42, 40.9 ], [ -73.43, 40.91 ], [ -73.44, 40.91 ], [ -73.43, 40.93 ], [ -73.46, 40.94 ], [ -73.49, 40.95 ], [ -73.49, 40.93 ], [ -73.49, 40.92 ], [ -73.47, 40.9 ], [ -73.47, 40.89 ], [ -73.48, 40.89 ], [ -73.47, 40.88 ], [ -73.48, 40.88 ], [ -73.49, 40.88 ], [ -73.49, 40.89 ], [ -73.51, 40.89 ], [ -73.51, 40.89 ], [ -73.51, 40.88 ], [ -73.53, 40.88 ], [ -73.55, 40.89 ], [ -73.54, 40.9 ], [ -73.53, 40.89 ], [ -73.52, 40.9 ], [ -73.51, 40.91 ], [ -73.52, 40.92 ], [ -73.57, 40.91 ], [ -73.63, 40.9 ], [ -73.65, 40.87 ], [ -73.65, 40.83 ], [ -73.65, 40.82 ], [ -73.67, 40.84 ], [ -73.67, 40.86 ], [ -73.71, 40.87 ], [ -73.72, 40.87 ], [ -73.73, 40.85 ], [ -73.73, 40.84 ], [ -73.7, 40.83 ], [ -73.7, 40.82 ], [ -73.7, 40.81 ], [ -73.71, 40.8 ], [ -73.72, 40.81 ], [ -73.73, 40.82 ], [ -73.74, 40.83 ], [ -73.76, 40.83 ], [ -73.76, 40.81 ], [ -73.75, 40.79 ], [ -73.76, 40.77 ], [ -73.78, 40.79 ], [ -73.82, 40.8 ], [ -73.86, 40.78 ], [ -73.87, 40.78 ], [ -73.89, 40.78 ], [ -73.91, 40.79 ], [ -73.93, 40.77 ], [ -73.96, 40.74 ], [ -73.96, 40.72 ], [ -73.97, 40.71 ], [ -73.98, 40.7 ], [ -73.99, 40.7 ], [ -74.0, 40.7 ], [ -74.0, 40.69 ], [ -74.02, 40.68 ], [ -74.01, 40.66 ], [ -74.02, 40.65 ], [ -74.04, 40.64 ], [ -74.04, 40.62 ], [ -74.03, 40.61 ], [ -74.0, 40.6 ], [ -74.0, 40.59 ], [ -74.0, 40.58 ], [ -74.01, 40.58 ], [ -74.0, 40.57 ], [ -73.99, 40.57 ], [ -73.94, 40.57 ], [ -73.93, 40.58 ], [ -73.93, 40.58 ], [ -73.91, 40.58 ], [ -73.9, 40.58 ], [ -73.89, 40.58 ], [ -73.88, 40.58 ], [ -73.88, 40.6 ], [ -73.89, 40.61 ], [ -73.89, 40.62 ], [ -73.88, 40.63 ], [ -73.88, 40.64 ], [ -73.87, 40.64 ], [ -73.85, 40.64 ], [ -73.83, 40.65 ], [ -73.82, 40.65 ], [ -73.8, 40.64 ], [ -73.78, 40.63 ], [ -73.77, 40.62 ], [ -73.77, 40.62 ], [ -73.78, 40.61 ], [ -73.79, 40.6 ], [ -73.85, 40.58 ], [ -73.94, 40.56 ], [ -73.94, 40.54 ], [ -73.9, 40.55 ], [ -73.81, 40.58 ], [ -73.77, 40.59 ], [ -73.75, 40.59 ], [ -73.71, 40.58 ], [ -73.58, 40.58 ], [ -73.58, 40.59 ], [ -73.61, 40.59 ], [ -73.71, 40.6 ], [ -73.71, 40.61 ], [ -73.7, 40.62 ], [ -73.67, 40.63 ], [ -73.66, 40.62 ], [ -73.66, 40.61 ], [ -73.66, 40.6 ], [ -73.65, 40.6 ], [ -73.64, 40.6 ], [ -73.63, 40.61 ], [ -73.56, 40.64 ], [ -73.5, 40.64 ], [ -73.4, 40.66 ], [ -73.37, 40.66 ], [ -73.32, 40.68 ], [ -73.27, 40.69 ], [ -73.26, 40.7 ], [ -73.25, 40.71 ], [ -73.23, 40.71 ], [ -73.21, 40.71 ], [ -73.18, 40.7 ], [ -73.16, 40.7 ], [ -73.15, 40.71 ], [ -73.14, 40.72 ], [ -73.14, 40.73 ], [ -73.13, 40.73 ], [ -73.11, 40.73 ], [ -73.1, 40.72 ], [ -73.08, 40.72 ], [ -73.05, 40.73 ], [ -73.03, 40.73 ], [ -73.02, 40.75 ], [ -73.01, 40.75 ], [ -72.95, 40.74 ], [ -72.93, 40.76 ], [ -72.91, 40.76 ], [ -72.89, 40.77 ], [ -72.88, 40.75 ], [ -72.85, 40.75 ], [ -72.83, 40.76 ], [ -72.82, 40.77 ], [ -72.81, 40.78 ], [ -72.83, 40.79 ], [ -72.8, 40.78 ], [ -72.77, 40.78 ], [ -72.74, 40.8 ], [ -72.73, 40.81 ], [ -72.7, 40.8 ], [ -72.68, 40.8 ], [ -72.66, 40.8 ], [ -72.65, 40.8 ], [ -72.68, 40.79 ], [ -72.73, 40.78 ], [ -72.73, 40.78 ], [ -72.74, 40.77 ], [ -72.73, 40.77 ], [ -72.72, 40.77 ], [ -72.7, 40.78 ], [ -72.61, 40.8 ], [ -72.54, 40.82 ], [ -72.5, 40.84 ], [ -72.49, 40.85 ], [ -72.49, 40.86 ], [ -72.5, 40.87 ], [ -72.5, 40.88 ], [ -72.5, 40.88 ], [ -72.48, 40.89 ], [ -72.46, 40.89 ], [ -72.45, 40.88 ], [ -72.45, 40.87 ], [ -72.46, 40.85 ], [ -72.44, 40.86 ], [ -72.41, 40.86 ], [ -72.37, 40.88 ], [ -72.32, 40.9 ], [ -72.22, 40.93 ], [ -72.16, 40.96 ], [ -72.09, 40.98 ], [ -72.01, 41.01 ], [ -71.93, 41.04 ], [ -71.88, 41.05 ], [ -71.86, 41.06 ], [ -71.86, 41.07 ], [ -71.88, 41.08 ], [ -71.9, 41.08 ]
                ]
            ]
        ]
    }
};

