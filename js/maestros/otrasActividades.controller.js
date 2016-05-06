/**
 * Created by joseantoniocartagena on 19/04/16.
 */
angular.module('sima')
    .controller('otrasActividadesController', function($scope,$compile,uiCalendarConfig, $http) {
        $scope.asignaturas = [];
        $scope.asignatura = {};
        $scope.eventSources = [
            {
                events: [
                    {
                        title: 'Cálculo',
                        start: '1992-10-13T13:57:31',
                        end: '1992-10-13T14:57:31',
                        hora: '13:57'
                    },
                    {
                        title: 'Matemáticas',
                        start: '1992-10-13T16:57:31',
                        end: '1992-10-13T17:57:31',
                        hora: '16:57'
                    }
                    // etc...
                ],
                color: 'yellow',   // an option!
                textColor: 'black' // an option!
            }
        ];
        $scope.crear = function () {
            $scope.asignaturas.push({
                nombre: $scope.asignatura.nombre,
                tipo: $scope.asignatura.tipo,
                actividad: $scope.asignatura.nombreEspecifico,
                producto: $scope.asignatura.fechaInicio,
                horas: $scope.asignatura.fechaGraduacion,
                fechaAutorizacion: $scope.asignatura.fechaAutorizacion,
                aportes: $scope.asignatura.aportes
            });
        }
        $scope.uiConfig = {
                calendar:{
                    header: {
                        left:   '',
                        center: '',
                        right:  ''
                    },
                    defaultView: 'agendaWeek',
                    hiddenDays: [0],
                    businessHours:{
                        start: '08:00', // a start time (10am in this example)
                        end: '23:00', // an end time (6pm in this example)
                        default: true,
                        dow: [ 1, 2, 3, 4, 5, 6 ]
                        // days of week. an array of zero-based day of week integers (0=Sunday)
                        // (Monday-Thursday in this example)
                    },
                    defaultDate: '1992-10-13',
                    dayNamesShort: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
                    allDaySlot: false,
                    columnFormat: 'ddd',
                    eventClick: function(calEvent, jsEvent, view) {

                        alert('Evento: ' + calEvent.title);
                        alert('Hora: ' + calEvent.hora);
                        // change the border color just for fun
                        $(this).css('border-color', 'red');

                    }

                }
        };

    });