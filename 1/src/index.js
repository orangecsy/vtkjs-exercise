import vtkConseSource from 'vtk.js/Sources/Filters/Sources/ConeSource';  
import vtkMapper from 'vtk.js/Sources/Rendering/Core/Mapper';  
import vtkActor from 'vtk.js/Sources/Rendering/Core/Actor';  
import vtkFullScreenRenderWindow from 'vtk.js/Sources/Rendering/Misc/FullScreenRenderWindow';  
  
const cone = vtkConseSource.newInstance();  
const mapper = vtkMapper.newInstance();  
const actor = vtkActor.newInstance();  
mapper.setInputConnection(cone.getOutputPort());  
actor.setMapper(mapper);  
  
const fullRender = vtkFullScreenRenderWindow.newInstance();  
const render = fullRender.getRenderer();  
render.addActor(actor);  
render.resetCamera();  
  
const renderWindow = fullRender.getRenderWindow();  
renderWindow.render();  