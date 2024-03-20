modelUIDs = [
        "b1891f18-8ea9-4b7d-8d7a-0dfa52dc4458", //microengine 
        "6bc2e25a-618a-4c7d-b6ee-1573a051ac03", //vimek
        "fe9c35fe-aea9-4e6e-be39-23806cab936e", // proe
        "e19bf460-424b-4c5b-af7e-5657f27cecdd", //pre25
        "4709d28e-db9e-4cdc-9ee8-18e0db5615c6" //moto
]


async function startViewer() {
        var viewer;
        let sessioninfo = await caasClient.getStreamingSession();
        await caasClient.enableStreamAccess(sessioninfo.sessionid, modelUIDs);
        viewer = new Communicator.WebViewer({
                containerId: "viewerContainer",
                endpointUri: sessioninfo.endpointUri,
                model: "_empty",
                boundingPreviewMode: Communicator.BoundingPreviewMode.None,
                enginePath: `https://cdn.jsdelivr.net/gh/techsoft3d/hoops-web-viewer@20${versionNumer}`,
                rendererType: 0
        });

        viewer.start();

        return viewer //[viewer,data]

}

async function fetchVersionNumber() {
  let data = await caasClient.getHCVersion();
  versionNumer = data;        
  return data
}




async function initializeViewer() {
    const models = [
        "master",
        "proe25",
        "proe",
        "moto",
        "vimek",
        "microengine",
      ];
  
      var result = await startViewer()
      viewer = result 
  
      viewer.setCallbacks({
        sceneReady: function (camera) {
          viewer
            .getSelectionManager()
            .setHighlightLineElementSelection(false);
          viewer
            .getSelectionManager()
            .setHighlightFaceElementSelection(false);
          viewer.getSelectionManager().setSelectParentIfSelected(false);
          viewer.getView().setAmbientOcclusionEnabled(true);
          viewer.getView().setAmbientOcclusionRadius(0.02);
          viewer.getModel().setEnableAutomaticUnitScaling(false);
          viewer.setClientTimeout(60, 60);
          viewer
            .getView()
            .setCamera(Communicator.Camera.construct(CAMERAS[4]));
        },
        modelStructureReady: function () {
          $(".dropdown").css("display", "inline-block");
          $(".spinner").css("display", "none");
        },
      });
  
      const uiConfig = {
        containerId: "content",
        screenConfiguration: Sample.screenConfiguration,
      };
      const ui = new Communicator.Ui.Desktop.DesktopUi(viewer, uiConfig);
    
      window.onresize = function () {
        viewer.resizeCanvas();
      };
  
}