
if (typeof gdjs.evtsExt__CameraShake__SetLayerShakingFrequency !== "undefined") {
  gdjs.evtsExt__CameraShake__SetLayerShakingFrequency.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CameraShake__SetLayerShakingFrequency = {};


gdjs.evtsExt__CameraShake__SetLayerShakingFrequency.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__CameraShake").getChild("LayerName").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Layer") == "");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("__CameraShake").getChild("LayerName").setString("__BaseLayer");
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Layers").getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("LayerName"))).getChild("Frequency").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Frequency")) || 0 : 0));
}}

}


};

gdjs.evtsExt__CameraShake__SetLayerShakingFrequency.func = function(runtimeScene, Frequency, Layer, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CameraShake"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CameraShake"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Frequency") return Frequency;
if (argName === "Layer") return Layer;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CameraShake__SetLayerShakingFrequency.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__CameraShake__SetLayerShakingFrequency.registeredGdjsCallbacks = [];