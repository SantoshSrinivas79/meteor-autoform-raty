/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */

AutoForm.addInputType('raty', {
  template: 'afRaty',
  valueOut() {
    return AutoForm.Utility.stringToNumber(this.find('input').val());
  }
}
);

Template.afRaty.helpers({
  atts() {
    const atts = _.clone(this.atts);
    delete atts.ratyOptions;
    return atts;
  }
});

Template.afRaty.rendered = function() {
  const basePath = '/packages/andrei_autoform-raty/raty/lib/images';
  return this.$('.raty').raty(_.defaults(this.data.atts.ratyOptions, {
    starHalf: `${basePath}/star-half.png`,
    starOff: `${basePath}/star-off.png`,
    starOn: `${basePath}/star-on.png`,
    number: this.data.max,
    score: this.data.value
  }
  )
  );
};
