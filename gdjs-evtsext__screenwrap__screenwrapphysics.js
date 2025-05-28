
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics || {};

/**
 * Behavior generated from Screen Wrap (physics objects)
 */
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics = class ScreenWrapPhysics extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.RequiredPhysicsBehavior = behaviorData.RequiredPhysicsBehavior !== undefined ? behaviorData.RequiredPhysicsBehavior : "";
    this._behaviorData.HorizontalWrapping = behaviorData.HorizontalWrapping !== undefined ? behaviorData.HorizontalWrapping : true;
    this._behaviorData.VerticalWrapping = behaviorData.VerticalWrapping !== undefined ? behaviorData.VerticalWrapping : true;
    this._behaviorData.BorderTop = behaviorData.BorderTop !== undefined ? behaviorData.BorderTop : Number("0") || 0;
    this._behaviorData.BorderLeft = behaviorData.BorderLeft !== undefined ? behaviorData.BorderLeft : Number("0") || 0;
    this._behaviorData.BorderRight = behaviorData.BorderRight !== undefined ? behaviorData.BorderRight : Number("0") || 0;
    this._behaviorData.BorderBottom = behaviorData.BorderBottom !== undefined ? behaviorData.BorderBottom : Number("0") || 0;
    this._behaviorData.TriggerOffset = behaviorData.TriggerOffset !== undefined ? behaviorData.TriggerOffset : Number("0") || 0;
    this._behaviorData.AngularVelocity = Number("0") || 0;
    this._behaviorData.LinearVelocityX = Number("0") || 0;
    this._behaviorData.LinearVelocityY = Number("0") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.RequiredPhysicsBehavior !== newBehaviorData.RequiredPhysicsBehavior)
      this._behaviorData.RequiredPhysicsBehavior = newBehaviorData.RequiredPhysicsBehavior;
    if (oldBehaviorData.HorizontalWrapping !== newBehaviorData.HorizontalWrapping)
      this._behaviorData.HorizontalWrapping = newBehaviorData.HorizontalWrapping;
    if (oldBehaviorData.VerticalWrapping !== newBehaviorData.VerticalWrapping)
      this._behaviorData.VerticalWrapping = newBehaviorData.VerticalWrapping;
    if (oldBehaviorData.BorderTop !== newBehaviorData.BorderTop)
      this._behaviorData.BorderTop = newBehaviorData.BorderTop;
    if (oldBehaviorData.BorderLeft !== newBehaviorData.BorderLeft)
      this._behaviorData.BorderLeft = newBehaviorData.BorderLeft;
    if (oldBehaviorData.BorderRight !== newBehaviorData.BorderRight)
      this._behaviorData.BorderRight = newBehaviorData.BorderRight;
    if (oldBehaviorData.BorderBottom !== newBehaviorData.BorderBottom)
      this._behaviorData.BorderBottom = newBehaviorData.BorderBottom;
    if (oldBehaviorData.TriggerOffset !== newBehaviorData.TriggerOffset)
      this._behaviorData.TriggerOffset = newBehaviorData.TriggerOffset;
    if (oldBehaviorData.AngularVelocity !== newBehaviorData.AngularVelocity)
      this._behaviorData.AngularVelocity = newBehaviorData.AngularVelocity;
    if (oldBehaviorData.LinearVelocityX !== newBehaviorData.LinearVelocityX)
      this._behaviorData.LinearVelocityX = newBehaviorData.LinearVelocityX;
    if (oldBehaviorData.LinearVelocityY !== newBehaviorData.LinearVelocityY)
      this._behaviorData.LinearVelocityY = newBehaviorData.LinearVelocityY;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    RequiredPhysicsBehavior: this._behaviorData.RequiredPhysicsBehavior,
    HorizontalWrapping: this._behaviorData.HorizontalWrapping,
    VerticalWrapping: this._behaviorData.VerticalWrapping,
    BorderTop: this._behaviorData.BorderTop,
    BorderLeft: this._behaviorData.BorderLeft,
    BorderRight: this._behaviorData.BorderRight,
    BorderBottom: this._behaviorData.BorderBottom,
    TriggerOffset: this._behaviorData.TriggerOffset,
    AngularVelocity: this._behaviorData.AngularVelocity,
    LinearVelocityX: this._behaviorData.LinearVelocityX,
    LinearVelocityY: this._behaviorData.LinearVelocityY,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.RequiredPhysicsBehavior !== undefined)
      this._behaviorData.RequiredPhysicsBehavior = networkSyncData.props.RequiredPhysicsBehavior;
    if (networkSyncData.props.HorizontalWrapping !== undefined)
      this._behaviorData.HorizontalWrapping = networkSyncData.props.HorizontalWrapping;
    if (networkSyncData.props.VerticalWrapping !== undefined)
      this._behaviorData.VerticalWrapping = networkSyncData.props.VerticalWrapping;
    if (networkSyncData.props.BorderTop !== undefined)
      this._behaviorData.BorderTop = networkSyncData.props.BorderTop;
    if (networkSyncData.props.BorderLeft !== undefined)
      this._behaviorData.BorderLeft = networkSyncData.props.BorderLeft;
    if (networkSyncData.props.BorderRight !== undefined)
      this._behaviorData.BorderRight = networkSyncData.props.BorderRight;
    if (networkSyncData.props.BorderBottom !== undefined)
      this._behaviorData.BorderBottom = networkSyncData.props.BorderBottom;
    if (networkSyncData.props.TriggerOffset !== undefined)
      this._behaviorData.TriggerOffset = networkSyncData.props.TriggerOffset;
    if (networkSyncData.props.AngularVelocity !== undefined)
      this._behaviorData.AngularVelocity = networkSyncData.props.AngularVelocity;
    if (networkSyncData.props.LinearVelocityX !== undefined)
      this._behaviorData.LinearVelocityX = networkSyncData.props.LinearVelocityX;
    if (networkSyncData.props.LinearVelocityY !== undefined)
      this._behaviorData.LinearVelocityY = networkSyncData.props.LinearVelocityY;
  }

  // Properties:
  
  _getRequiredPhysicsBehavior() {
    return this._behaviorData.RequiredPhysicsBehavior !== undefined ? this._behaviorData.RequiredPhysicsBehavior : "";
  }
  _setRequiredPhysicsBehavior(newValue) {
    this._behaviorData.RequiredPhysicsBehavior = newValue;
  }
  _getHorizontalWrapping() {
    return this._behaviorData.HorizontalWrapping !== undefined ? this._behaviorData.HorizontalWrapping : true;
  }
  _setHorizontalWrapping(newValue) {
    this._behaviorData.HorizontalWrapping = newValue;
  }
  _toggleHorizontalWrapping() {
    this._setHorizontalWrapping(!this._getHorizontalWrapping());
  }
  _getVerticalWrapping() {
    return this._behaviorData.VerticalWrapping !== undefined ? this._behaviorData.VerticalWrapping : true;
  }
  _setVerticalWrapping(newValue) {
    this._behaviorData.VerticalWrapping = newValue;
  }
  _toggleVerticalWrapping() {
    this._setVerticalWrapping(!this._getVerticalWrapping());
  }
  _getBorderTop() {
    return this._behaviorData.BorderTop !== undefined ? this._behaviorData.BorderTop : Number("0") || 0;
  }
  _setBorderTop(newValue) {
    this._behaviorData.BorderTop = newValue;
  }
  _getBorderLeft() {
    return this._behaviorData.BorderLeft !== undefined ? this._behaviorData.BorderLeft : Number("0") || 0;
  }
  _setBorderLeft(newValue) {
    this._behaviorData.BorderLeft = newValue;
  }
  _getBorderRight() {
    return this._behaviorData.BorderRight !== undefined ? this._behaviorData.BorderRight : Number("0") || 0;
  }
  _setBorderRight(newValue) {
    this._behaviorData.BorderRight = newValue;
  }
  _getBorderBottom() {
    return this._behaviorData.BorderBottom !== undefined ? this._behaviorData.BorderBottom : Number("0") || 0;
  }
  _setBorderBottom(newValue) {
    this._behaviorData.BorderBottom = newValue;
  }
  _getTriggerOffset() {
    return this._behaviorData.TriggerOffset !== undefined ? this._behaviorData.TriggerOffset : Number("0") || 0;
  }
  _setTriggerOffset(newValue) {
    this._behaviorData.TriggerOffset = newValue;
  }
  _getAngularVelocity() {
    return this._behaviorData.AngularVelocity !== undefined ? this._behaviorData.AngularVelocity : Number("0") || 0;
  }
  _setAngularVelocity(newValue) {
    this._behaviorData.AngularVelocity = newValue;
  }
  _getLinearVelocityX() {
    return this._behaviorData.LinearVelocityX !== undefined ? this._behaviorData.LinearVelocityX : Number("0") || 0;
  }
  _setLinearVelocityX(newValue) {
    this._behaviorData.LinearVelocityX = newValue;
  }
  _getLinearVelocityY() {
    return this._behaviorData.LinearVelocityY !== undefined ? this._behaviorData.LinearVelocityY : Number("0") || 0;
  }
  _setLinearVelocityY(newValue) {
    this._behaviorData.LinearVelocityY = newValue;
  }
}

/**
 * Shared data generated from Screen Wrap (physics objects)
 */
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.SharedData = class ScreenWrapPhysicsSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._ScreenWrap_ScreenWrapPhysicsSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._ScreenWrap_ScreenWrapPhysicsSharedData = new gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.SharedData(
      initialData
    );
  }
  return instanceContainer._ScreenWrap_ScreenWrapPhysicsSharedData;
}

// Methods:
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.onCreatedContext = {};
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.onCreatedContext.GDObjectObjects3= [];


gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.onCreatedContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.onCreatedContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.onCreatedContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBorderBottom() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.onCreatedContext.GDObjectObjects2[k] = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.onCreatedContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.onCreatedContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.onCreatedContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.onCreatedContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetBottomBorder(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.onCreatedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.onCreatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBorderRight() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.onCreatedContext.GDObjectObjects1[k] = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.onCreatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.onCreatedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.onCreatedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetRightBorder(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.onCreatedContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "RequiredPhysicsBehavior": this._getRequiredPhysicsBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScreenWrap"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScreenWrap"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.onCreatedContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.onCreatedContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.onCreatedContext.GDObjectObjects3.length = 0;


return;
}
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects4= [];


gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects3[i].getX() < (gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBorderLeft()) - ((gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects3[i].getWidth()) / 2) - (gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTriggerOffset()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SaveCurrentVelocities((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects3[i].setX((gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBorderRight()) - ((gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects3[i].getWidth()) / 2) + (gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTriggerOffset()));
}
}{for(var i = 0, len = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ApplySavedVelocities((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

/* Reuse gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2[i].getX() > (gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBorderRight()) - ((gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2[i].getWidth()) / 2) + (gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTriggerOffset()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SaveCurrentVelocities((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2[i].setX((gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBorderLeft()) - ((gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2[i].getWidth()) / 2) - (gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTriggerOffset()));
}
}{for(var i = 0, len = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ApplySavedVelocities((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2[i].getY() < (gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBorderTop()) - ((gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2[i].getHeight()) / 2) - (gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTriggerOffset()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SaveCurrentVelocities((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2[i].setY((gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBorderBottom()) - ((gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2[i].getHeight()) / 2) + (gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTriggerOffset()));
}
}{for(var i = 0, len = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ApplySavedVelocities((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

/* Reuse gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects1[i].getY() > (gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBorderBottom()) - ((gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects1[i].getHeight()) / 2) + (gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTriggerOffset()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SaveCurrentVelocities((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects1[i].setY((gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBorderTop()) - ((gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects1[i].getHeight()) / 2) - (gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTriggerOffset()));
}
}{for(var i = 0, len = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ApplySavedVelocities((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsHorizontalWrapping((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsVerticalWrapping((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "RequiredPhysicsBehavior": this._getRequiredPhysicsBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScreenWrap"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScreenWrap"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;


return;
}
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsHorizontalWrappingContext = {};
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsHorizontalWrappingContext.GDObjectObjects1= [];
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsHorizontalWrappingContext.GDObjectObjects2= [];


gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsHorizontalWrappingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsHorizontalWrappingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsHorizontalWrappingContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsHorizontalWrappingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalWrapping()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsHorizontalWrappingContext.GDObjectObjects1[k] = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsHorizontalWrappingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsHorizontalWrappingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsHorizontalWrappingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsHorizontalWrappingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsHorizontalWrappingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalWrapping() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsHorizontalWrappingContext.GDObjectObjects1[k] = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsHorizontalWrappingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsHorizontalWrappingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsHorizontalWrapping = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "RequiredPhysicsBehavior": this._getRequiredPhysicsBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScreenWrap"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScreenWrap"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsHorizontalWrappingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsHorizontalWrappingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsHorizontalWrappingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsHorizontalWrappingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsHorizontalWrappingContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsVerticalWrappingContext = {};
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsVerticalWrappingContext.GDObjectObjects1= [];
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsVerticalWrappingContext.GDObjectObjects2= [];


gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsVerticalWrappingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsVerticalWrappingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsVerticalWrappingContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsVerticalWrappingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalWrapping()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsVerticalWrappingContext.GDObjectObjects1[k] = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsVerticalWrappingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsVerticalWrappingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsVerticalWrappingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsVerticalWrappingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsVerticalWrappingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalWrapping() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsVerticalWrappingContext.GDObjectObjects1[k] = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsVerticalWrappingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsVerticalWrappingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsVerticalWrapping = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "RequiredPhysicsBehavior": this._getRequiredPhysicsBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScreenWrap"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScreenWrap"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsVerticalWrappingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsVerticalWrappingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsVerticalWrappingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsVerticalWrappingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.IsVerticalWrappingContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.EnableHorizontalWrappingContext = {};
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.EnableHorizontalWrappingContext.GDObjectObjects1= [];
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.EnableHorizontalWrappingContext.GDObjectObjects2= [];


gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.EnableHorizontalWrappingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("EnableHorizontalWrapping") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.EnableHorizontalWrappingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.EnableHorizontalWrappingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.EnableHorizontalWrappingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHorizontalWrapping(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("EnableHorizontalWrapping") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.EnableHorizontalWrappingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.EnableHorizontalWrappingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.EnableHorizontalWrappingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHorizontalWrapping(true);
}
}}

}


};

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.EnableHorizontalWrapping = function(EnableHorizontalWrapping, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "RequiredPhysicsBehavior": this._getRequiredPhysicsBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScreenWrap"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScreenWrap"),
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
if (argName === "EnableHorizontalWrapping") return EnableHorizontalWrapping;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.EnableHorizontalWrappingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.EnableHorizontalWrappingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.EnableHorizontalWrappingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.EnableHorizontalWrappingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.EnableHorizontalWrappingContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.EnableVerticalWrappingContext = {};
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.EnableVerticalWrappingContext.GDObjectObjects1= [];
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.EnableVerticalWrappingContext.GDObjectObjects2= [];


gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.EnableVerticalWrappingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("EnableVerticalWrapping") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.EnableVerticalWrappingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.EnableVerticalWrappingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.EnableVerticalWrappingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setVerticalWrapping(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("EnableVerticalWrapping") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.EnableVerticalWrappingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.EnableVerticalWrappingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.EnableVerticalWrappingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setVerticalWrapping(true);
}
}}

}


};

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.EnableVerticalWrapping = function(EnableVerticalWrapping, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "RequiredPhysicsBehavior": this._getRequiredPhysicsBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScreenWrap"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScreenWrap"),
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
if (argName === "EnableVerticalWrapping") return EnableVerticalWrapping;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.EnableVerticalWrappingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.EnableVerticalWrappingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.EnableVerticalWrappingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.EnableVerticalWrappingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.EnableVerticalWrappingContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderTopContext = {};
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderTopContext.GDObjectObjects1= [];
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderTopContext.GDObjectObjects2= [];


gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderTopContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderTopContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderTopContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderTopContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBorderTop()); }}}

}


};

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderTop = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "RequiredPhysicsBehavior": this._getRequiredPhysicsBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScreenWrap"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScreenWrap"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderTopContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderTopContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderTopContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderTopContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderTopContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderLeftContext = {};
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderLeftContext.GDObjectObjects1= [];
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderLeftContext.GDObjectObjects2= [];


gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderLeftContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderLeftContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderLeftContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderLeftContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBorderLeft()); }}}

}


};

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderLeft = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "RequiredPhysicsBehavior": this._getRequiredPhysicsBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScreenWrap"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScreenWrap"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderLeftContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderLeftContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderLeftContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderRightContext = {};
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderRightContext.GDObjectObjects1= [];
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderRightContext.GDObjectObjects2= [];


gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderRightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderRightContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderRightContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderRightContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBorderRight()); }}}

}


};

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderRight = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "RequiredPhysicsBehavior": this._getRequiredPhysicsBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScreenWrap"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScreenWrap"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderRightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderRightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderRightContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderRightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderRightContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderBottomContext = {};
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderBottomContext.GDObjectObjects1= [];
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderBottomContext.GDObjectObjects2= [];


gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderBottomContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderBottomContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderBottomContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderBottomContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBorderBottom()); }}}

}


};

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderBottom = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "RequiredPhysicsBehavior": this._getRequiredPhysicsBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScreenWrap"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScreenWrap"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderBottomContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderBottomContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderBottomContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderBottomContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.BorderBottomContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.TriggerOffsetContext = {};
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.TriggerOffsetContext.GDObjectObjects1= [];
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.TriggerOffsetContext.GDObjectObjects2= [];


gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.TriggerOffsetContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.TriggerOffsetContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.TriggerOffsetContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.TriggerOffsetContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTriggerOffset()); }}}

}


};

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.TriggerOffset = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "RequiredPhysicsBehavior": this._getRequiredPhysicsBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScreenWrap"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScreenWrap"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.TriggerOffsetContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.TriggerOffsetContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.TriggerOffsetContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.TriggerOffsetContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.TriggerOffsetContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetTopBorderContext = {};
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetTopBorderContext.GDObjectObjects1= [];
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetTopBorderContext.GDObjectObjects2= [];


gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetTopBorderContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetTopBorderContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetTopBorderContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetTopBorderContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setBorderTop((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetTopBorder = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "RequiredPhysicsBehavior": this._getRequiredPhysicsBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScreenWrap"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScreenWrap"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetTopBorderContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetTopBorderContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetTopBorderContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetTopBorderContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetTopBorderContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetLeftBorderContext = {};
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetLeftBorderContext.GDObjectObjects1= [];
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetLeftBorderContext.GDObjectObjects2= [];


gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetLeftBorderContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetLeftBorderContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetLeftBorderContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetLeftBorderContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setBorderLeft((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetLeftBorder = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "RequiredPhysicsBehavior": this._getRequiredPhysicsBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScreenWrap"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScreenWrap"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetLeftBorderContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetLeftBorderContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetLeftBorderContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetLeftBorderContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetLeftBorderContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetBottomBorderContext = {};
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetBottomBorderContext.GDObjectObjects1= [];
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetBottomBorderContext.GDObjectObjects2= [];


gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetBottomBorderContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetBottomBorderContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetBottomBorderContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetBottomBorderContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setBorderBottom((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetBottomBorder = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "RequiredPhysicsBehavior": this._getRequiredPhysicsBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScreenWrap"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScreenWrap"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetBottomBorderContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetBottomBorderContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetBottomBorderContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetBottomBorderContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetBottomBorderContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetRightBorderContext = {};
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetRightBorderContext.GDObjectObjects1= [];
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetRightBorderContext.GDObjectObjects2= [];


gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetRightBorderContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetRightBorderContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetRightBorderContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetRightBorderContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setBorderRight((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetRightBorder = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "RequiredPhysicsBehavior": this._getRequiredPhysicsBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScreenWrap"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScreenWrap"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetRightBorderContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetRightBorderContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetRightBorderContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetRightBorderContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetRightBorderContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetTriggerOffsetContext = {};
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetTriggerOffsetContext.GDObjectObjects1= [];
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetTriggerOffsetContext.GDObjectObjects2= [];


gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetTriggerOffsetContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetTriggerOffsetContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetTriggerOffsetContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetTriggerOffsetContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTriggerOffset((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetTriggerOffset = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "RequiredPhysicsBehavior": this._getRequiredPhysicsBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScreenWrap"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScreenWrap"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetTriggerOffsetContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetTriggerOffsetContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetTriggerOffsetContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetTriggerOffsetContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SetTriggerOffsetContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SaveCurrentVelocitiesContext = {};
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SaveCurrentVelocitiesContext.GDObjectObjects1= [];
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SaveCurrentVelocitiesContext.GDObjectObjects2= [];


gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SaveCurrentVelocitiesContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SaveCurrentVelocitiesContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SaveCurrentVelocitiesContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SaveCurrentVelocitiesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAngularVelocity((gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SaveCurrentVelocitiesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("RequiredPhysicsBehavior")).getAngularVelocity()));
}
}{for(var i = 0, len = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SaveCurrentVelocitiesContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SaveCurrentVelocitiesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLinearVelocityX((gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SaveCurrentVelocitiesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("RequiredPhysicsBehavior")).getLinearVelocityX()));
}
}{for(var i = 0, len = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SaveCurrentVelocitiesContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SaveCurrentVelocitiesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLinearVelocityY((gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SaveCurrentVelocitiesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("RequiredPhysicsBehavior")).getLinearVelocityY()));
}
}}

}


};

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SaveCurrentVelocities = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "RequiredPhysicsBehavior": this._getRequiredPhysicsBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScreenWrap"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScreenWrap"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SaveCurrentVelocitiesContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SaveCurrentVelocitiesContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SaveCurrentVelocitiesContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SaveCurrentVelocitiesContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.SaveCurrentVelocitiesContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.ApplySavedVelocitiesContext = {};
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.ApplySavedVelocitiesContext.GDObjectObjects1= [];
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.ApplySavedVelocitiesContext.GDObjectObjects2= [];


gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.ApplySavedVelocitiesContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.ApplySavedVelocitiesContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.ApplySavedVelocitiesContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.ApplySavedVelocitiesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("RequiredPhysicsBehavior")).setAngularVelocity((gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.ApplySavedVelocitiesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngularVelocity()));
}
}{for(var i = 0, len = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.ApplySavedVelocitiesContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.ApplySavedVelocitiesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("RequiredPhysicsBehavior")).setLinearVelocityX((gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.ApplySavedVelocitiesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLinearVelocityX()));
}
}{for(var i = 0, len = gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.ApplySavedVelocitiesContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.ApplySavedVelocitiesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("RequiredPhysicsBehavior")).setLinearVelocityY((gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.ApplySavedVelocitiesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLinearVelocityY()));
}
}}

}


};

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.ApplySavedVelocities = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "RequiredPhysicsBehavior": this._getRequiredPhysicsBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScreenWrap"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScreenWrap"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.ApplySavedVelocitiesContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.ApplySavedVelocitiesContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.ApplySavedVelocitiesContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.ApplySavedVelocitiesContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics.prototype.ApplySavedVelocitiesContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("ScreenWrap::ScreenWrapPhysics", gdjs.evtsExt__ScreenWrap__ScreenWrapPhysics.ScreenWrapPhysics);
