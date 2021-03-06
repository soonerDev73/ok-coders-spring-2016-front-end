angular
  .module('rovers')
  .directive('roversTable', roversTable)

function roversTable() {
  var template = `
    <table class="overview table table-bordered table-striped">
      <tr ng-repeat="r in rovers">
        <td><a ng-href="#/rover/{{ r.name }}">{{ r.name }}</a></td>
        <td>{{ r.landing_date }}</td>
        <td>{{ r.max_sol }}</td>
      </tr>
    </table>
  `

  var directive = {
    template: template,
    scope: {
      test: '@',
      rovers: '='
    },
    link: link
  }

  function link(scope, elem, attr) {
    console.log(scope)
    console.log(elem)
    console.log(attr)
  }

  return directive
}
