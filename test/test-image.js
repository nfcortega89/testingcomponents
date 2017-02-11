import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Image from '../js/components/image';
import Gallery from '../js/components/gallery';

describe('Gallery component', function() {
  it('Renders an array of images', function() {
    const images = [
      {
        url: 'https://thechive.files.wordpress.com/2016/11/im-thankful-for-beautiful-asian-women-everywhere-44-photos-28.jpg?quality=85&strip=info&w=600',
        description: 'pizza'
      },
      {
        url: 'https://thechive.files.wordpress.com/2016/11/im-thankful-for-beautiful-asian-women-everywhere-44-photos-210.jpg?quality=85&strip=info&w=600',
        description: 'chailee'
      }
    ]
    const renderer = TestUtils.createRenderer();
    renderer.render(<Gallery images={images} />);
    const result = renderer.getRenderOutput();
    result.props.children.length.should.be.greaterThan(1);
  })
  it('Show message if no images are displayed', function() {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Gallery />);
    const result = renderer.getRenderOutput();
    result.props.children.props.children.should.contain("Please add images");
  })
})
describe('Image component', function() {
    it('Renders the image and description',  function() {
        const url = "http://www.example.com/image.png";
        const description = "Example description";
        const renderer = TestUtils.createRenderer();
        renderer.render(<Image url={url} description={description} />);
        const result = renderer.getRenderOutput();
        result.type.should.equal('div');
        result.props.className.should.equal('gallery-image');

        const img = result.props.children[0];
        img.type.should.equal('img');
        img.props.src.should.equal(url);
        img.props.alt.should.equal(description);

        const p = result.props.children[1];
        p.type.should.equal('p');
        p.props.children.should.equal(description);
    });
});
