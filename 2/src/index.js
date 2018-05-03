
import vtkTexture from 'vtk.js/Sources/Rendering/Core/Texture';
import vtkElevationReader from 'vtk.js/Sources/IO/Misc/ElevationReader';
import vtkMapper from 'vtk.js/Sources/Rendering/Core/Mapper';
import vtkActor from 'vtk.js/Sources/Rendering/Core/Actor';
import vtkFullScreenRenderWindow from 'vtk.js/Sources/Rendering/Misc/FullScreenRenderWindow';

const fullScreenRenderer = vtkFullScreenRenderWindow.newInstance({
  background: [0, 0, 0]
});
const renderer = fullScreenRenderer.getRenderer();
const renderWindow = fullScreenRenderer.getRenderWindow();

const img = new Image();
img.onload = function() {
  const texture = vtkTexture.newInstance();
  texture.setInterpolate(true);
  texture.setImage(img);
  actor.addTexture(texture);
  renderWindow.render();
};
img.src = `./img/dem.jpg`;

const reader = vtkElevationReader.newInstance({
  xSpacing: 0.01568,
  ySpacing: 0.01568,
  zScaling: 0.06666,
});
reader.setUrl(`./img/dem.csv`)
  .then(function() {
  renderer.resetCamera();
  renderWindow.render();
});

const mapper = vtkMapper.newInstance();
mapper.setInputConnection(reader.getOutputPort());
const actor = vtkActor.newInstance();
actor.setMapper(mapper);
renderer.addActor(actor);
renderer.resetCamera();
renderWindow.render();

global.reader = reader;
global.mapper = mapper;
global.actor = actor;
global.renderer = renderer;
global.renderWindow = renderWindow;
