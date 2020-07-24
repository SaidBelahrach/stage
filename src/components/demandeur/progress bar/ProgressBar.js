import React from 'react'; 
// import {progressbar} from './js/progressbar.js';
import './css/main.css';

export default function ProgressBar(props){ 


    function initProgressBar() {
        var ProgressBar = {};
        ProgressBar.singleStepAnimation = 1000; //default value
        // this delay is required as browser will need some time in rendering and then processing css animations.
        var renderingWaitDelay = 200;
    
        // A utility function to create an element with its style
        var createElement = function (type, className, style, text) {
                    var elem = document.createElement(type);
                    elem.className = className;
                    for (var prop in style) {
                        elem.style[prop] = style[prop];
                    }
                    elem.innerHTML = text;
                    return elem;
        };
    
        var createStatusBar = function(stages, stageWidth, currentStageIndex) {
                    var statusBar = createElement('div', 'status-bar', {width: 100 - stageWidth + '%'}, '');
                    var currentStatus = createElement('div', 'current-status', {}, '');
                
                    setTimeout(function() {
                        currentStatus.style.width = (100 * currentStageIndex)/(stages.length - 1)+'%';
                        currentStatus.style.transition = 'width '+(currentStageIndex * ProgressBar.singleStepAnimation)+'ms linear';
                    }, renderingWaitDelay);
                
                    statusBar.appendChild(currentStatus);
                    return statusBar;
        };
    
        var createCheckPoints = function(stages, stageWidth, currentStageIndex) {
                    var ul = createElement('ul', 'progress-bar', { }, '');
                    var animationDelay = renderingWaitDelay;
                    for (var index = 0; index < stages.length; index++) {
                        var li = createElement('li', 'section', {width: stageWidth + '%'}, stages[index]);
                        if(currentStageIndex >= index) {
                        setTimeout(function(li, currentStageIndex, index) {
                            li.className+= (currentStageIndex > index)?' visited': ' visited current';
                            // if( currentStageIndex > index){
                            //     li.style.color="green";
                            // }else{

                            //     li.style.color="red";
                            // }
                        }, animationDelay, li, currentStageIndex, index);
                        animationDelay+= ProgressBar.singleStepAnimation;
                        }
                        ul.appendChild(li);
                    }
                    return ul;
        };
    
        var createHTML = function (wrapper, stages, currentStage) {
                    var stageWidth = 100 / stages.length;
                    var currentStageIndex = stages.indexOf(currentStage);
                
                    //create status bar
                    var statusBar = createStatusBar(stages, stageWidth, currentStageIndex);
                    wrapper.appendChild(statusBar);
                
                    //create checkpoints
                    var checkpoints = createCheckPoints(stages, stageWidth, currentStageIndex);
                    wrapper.appendChild(checkpoints);
                
                    return wrapper;
        };
    
        var validateParameters = function(stages, currentStage, container) {
                    if(!(typeof stages === 'object' && stages.length && typeof stages[0] === 'string')) {
                        console.error('Expecting Array of strings for "stages" parameter.');
                        return false;
                    }
                    if(typeof currentStage !== 'string') {
                        console.error('Expecting string for "current stage" parameter.');
                        return false;
                    }
                    if(typeof container !== 'string' && typeof container !== 'undefined') {
                        console.error('Expecting string for "container" parameter.');
                        return false;
                    }
                    return true;
        };
        //called by user to init bar with required data and divContainer
        ProgressBar.init = function (stages, currentStage, container) {
        if(validateParameters(stages, currentStage, container)) {
            var wrapper = document.getElementsByClassName(container); 
            if(wrapper.length > 0) {
            wrapper = wrapper[0];
            }
             else {
            wrapper = createElement('div', 'progress-bar-wrapper', { }, '');
            document.body.appendChild(wrapper);
            }
            createHTML(wrapper, stages, currentStage);
        }
        };
        return ProgressBar;
    }
    const progressbar= initProgressBar();

 
    var steps= [ 'Nouveau', 'En attente', 'Evaluation','Evaluer', 'Rejeter CM/CAB', 
                'Realisation', 'Test', 'Implementer', 'attente revue', 'Fermer'   ]
                
    progressbar.singleStepAnimation = 100; 
    progressbar.init(props.steps, props.current,'progress-bar-wrapper');
       
    var itm=document.querySelector('li.section.visited.current');
     console.log(itm);
     
    return <div id="progress-bar-wrapper" className="progress-bar-wrapper"  > </div>
}