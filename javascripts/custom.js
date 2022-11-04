var CAMERAS = [
    // ################## 0 ####################
    {
        "position": {
            "x": 4950.776623050626,
            "y": -2639.8361796003737,
            "z": 2995.3661892340488
        },
        "target": {
            "x": 5042.01416015625,
            "y": -2471.5,
            "z": 2954.844970703125
        },
        "up": {
            "x": 0.06252777086108859,
            "y": 0.2014122371660974,
            "z": 0.9775087665033451
        },
        "width": 195.71235702116152,
        "height": 195.71235702116152,
        "projection": 0,
        "nearLimit": 0.001,
        "cameraFlags": 0
    },
    // ################## 1 ####################
    {
        "position": {
            "x": 4076.6313825246043,
            "y": -3600.928029901384,
            "z": 3276.931029667795
        },
        "target": {
            "x": 5043.569136282429,
            "y": -2482.978856129572,
            "z": 2929.302664548857
        },
        "up": {
            "x": 0.13644404470426794,
            "y": 0.1846330413244745,
            "z": 0.9732901225821696
        },
        "width": 1518.4282844488964,
        "height": 1518.4282844488964,
        "projection": 1,
        "nearLimit": 0.001,
        "cameraFlags": 0
    },
      // ################## 2 ####################
      {
        "position": {
            "x": 2748.855586134728,
            "y": -4310.165881629735,
            "z": 4105.995419606072
        },
        "target": {
            "x": 4731.919712365921,
            "y": -2056.805313882008,
            "z": 3455.6039184782053
        },
        "up": {
            "x": 0.12599707927638157,
            "y": 0.17115444859975043,
            "z": 0.9771544866285662
        },
        "width": 3071.349260791447,
        "height": 3071.349260791447,
        "projection": 1,
        "nearLimit": 0.001,
        "cameraFlags": 0
    },
      // ################## 3 ####################
      {
        "position": {
            "x": -1620.4408050273378,
            "y": -1875.7166282070682,
            "z": 4483.421145934589
        },
        "target": {
            "x": 3507.7284673355534,
            "y": -218.90304742866942,
            "z": 3605.7106660415448
        },
        "up": {
            "x": 0.13970991932082952,
            "y": 0.0899629192640627,
            "z": 0.9860972627488909
        },
        "width": 5460.176463629238,
        "height": 5460.176463629238,
        "projection": 1,
        "nearLimit": 0.001,
        "cameraFlags": 0
    },
      // ################## 4 ####################
      {
        "position": {
            "x": -4266.95771120955,
            "y": -7622.323364007278,
            "z": 6419.985746616898
        },
        "target": {
            "x": 2069.41755351888,
            "y": 1165.1398817474449,
            "z": 4273.0547239637945
        },
        "up": {
            "x": 0.09947053744820122,
            "y": 0.16789494566439175,
            "z": 0.9807736229120954
        },
        "width": 11044.38656544462,
        "height": 11044.38656544462,
        "projection": 1,
        "nearLimit": 0.001,
        "cameraFlags": 0
    },
      // ################## 5 ####################
    {
        "position": {
            "x": 5378.36036638544,
            "y": 14865.664455641037,
            "z": 5635.963740611351
        },
        "target": {
            "x": 10767.167121771126,
            "y": 14928.219076316685,
            "z": 4758.253260718313
        },
        "up": {
            "x": 0.16073681048924793,
            "y": 0.0018658732192835495,
            "z": 0.9869955401474076
        },
        "width": 5460.176463629238,
        "height": 5460.176463629238,
        "projection": 1,
        "nearLimit": 0.001,
        "cameraFlags": 0
    },
      // ################## 6 ####################
    {
        "position": {
            "x": 2051.951122891581,
            "y": 15110.109956957138,
            "z": 5193.313819625023
        },
        "target": {
            "x": -2457.8019889505467,
            "y": 13001.485776621854,
            "z": 2950.690812896483
        },
        "up": {
            "x": -0.3720618833055397,
            "y": -0.17396488549651007,
            "z": 0.9117599320025646
        },
        "width": 5460.176463629238,
        "height": 5460.176463629238,
        "projection": 1,
        "nearLimit": 0.001,
        "cameraFlags": 0
    },
      // ################## 7 ####################
    {
        "position": {
            "x": 7890.083351579469,
            "y": 18850.338556036266,
            "z": 4067.8512302173776
        },
        "target": {
            "x": 13316.722484341308,
            "y": 18742.025375562964,
            "z": 3473.390977814255
        },
        "up": {
            "x": 0.10885030553839666,
            "y": -0.0021726012177916932,
            "z": 0.9940557785095091
        },
        "width": 5460.176463629238,
        "height": 5460.176463629238,
        "projection": 1,
        "nearLimit": 0.001,
        "cameraFlags": 0
    }
];

function setView(val) {
    viewer.getView().isolateNodes = function (d,b){
        void (0 === b) && (b = 400);
        var a=this._model.getRootNode();
        this._model.setNodesVisibility([a],!1);
        this._model.setNodesVisibility(d,!0);
    };
    if (val == 0) {  
        var m = Communicator.Matrix.createFromArray([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 5000, -2500, 3000, 1]);
        viewer.getModel().loadSubtreeFromModel(viewer.getModel().getRootNode(), 'microengine', m).then( function() {
            viewer.fitWorld();
        }) ;
    }
    if (val == 1) {
        var m = Communicator.Matrix.createFromArray([1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 5500, -2000, 2670, 1]);
        viewer.getModel().loadSubtreeFromModel(viewer.getModel().getRootNode(), 'moto', m).then( function() {
            viewer.fitWorld();
        }) ;
    }
    if (val == 2) {
        var m = Communicator.Matrix.createFromArray([-10, 4.8985871985824346e-15, 0, 0, -4.8985871985824346e-15, -10, 0, 0, 0, 0, 10, 0, 4000, 0, 2700, 1]);
        viewer.getModel().loadSubtreeFromModel(viewer.getModel().getRootNode(), 'vimek', m).then( function() {
            viewer.fitWorld();
        }) ;
    }
    if (val == 3) {
        var m = Communicator.Matrix.createFromArray([-20, 4.8985871985824346e-15, 0, 0, -4.8985871985824346e-15, -20, 0, 0, 0, 0, 20, 0, 4000, 2000, 2360, 1]);
        viewer.getModel().loadSubtreeFromModel(viewer.getModel().getRootNode(), 'proe', m).then( function() {
            viewer.fitWorld();
        }) ;
    }
    if (val == 4) {
        var m = Communicator.Matrix.createFromArray([-20, 4.8985871985824346e-15, 0, 0, -4.8985871985824346e-15, -20, 0, 0, 0, 0, 20, 0, 4000, 8000, 2360, 1]);
        viewer.getModel().loadSubtreeFromModel(viewer.getModel().getRootNode(), 'proe25', m).then( function() {
            viewer.fitWorld();
        }) ;
    }
}