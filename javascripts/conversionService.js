modelUIDs = [
        "2b3a2eb9-42de-4b16-936d-b41822be6f4a", //microengine 
        "707947a9-7df8-4720-bafd-e2d9b3a0d020", //vimek
        "6d972cea-18e2-486c-b1f5-1869bcc644d9", // proe
        "40f4677c-19fc-4978-b80d-2201346c58f5", //pre25
        "a35ee3a0-62ba-43bf-a449-fd563ee3b737" //moto
]


async function startViewer() {
        const conversionServiceURI = "https://csapi.techsoft3d.com";

        var viewer;

        let res = await fetch(conversionServiceURI + '/api/streamingSession');
        var data = await res.json();

        await fetch(conversionServiceURI + '/api/enableStreamAccess/' + data.sessionid, { method: 'put', headers: { 'items': JSON.stringify(modelUIDs) } });

       
        await fetch(conversionServiceURI + '/api/enableStreamAccess/' +  data.sessionid, { method: 'put', headers: { 'CS-API-Arg': JSON.stringify({subDirectory:"moto_parts" }), 'items': JSON.stringify(["0f248a5d-2366-44e3-9c48-2b64b7264d2e"]) } });
   
     

        viewer = new Communicator.WebViewer({
                containerId: "viewerContainer",
                endpointUri: 'wss://' + data.serverurl + ":" + data.port + '?token=' + data.sessionid,
                model: "_empty",
                boundingPreviewMode: Communicator.BoundingPreviewMode.None,
                enginePath: "https://cdn.jsdelivr.net/gh/techsoft3d/hoops-web-viewer@2022.2",
                rendererType: 0
        });

        viewer.start();

        return [viewer,data]

}

