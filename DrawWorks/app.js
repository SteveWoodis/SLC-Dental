var app = angular.module('drawWorksApp', ['firebase', 'ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/login', {
        templateUrl: '/login/login.html',
        controller: 'loginController'
    })
    .when('/registration', {
        templateUrl: '/login/contractorRegistration.html',
        controller: 'conRegController'
    })
    .when('/aboutMe', {
        templateUrl: 'Aboutme.html',
        controller: 'aboutMeCtrl'
    })
    .when('/gprojects', {
     templateUrl: '/projects/gprojects.html',
        controller: 'gprojectsCtrl',
        resolve: {
            projectsRef: function (projectService) {
            return projectService.getProjects();
            }
        }
    })
    .when('/createProjects', {
     templateUrl: '/projects/createbids.html',
        controller: 'createbidsCtrl',
        resolve: {
            projectsRef: function (projectService) {
            return projectService.getProjects();
            }
        }
    })
    .when('/submitProjects', {
     templateUrl: '/projects/submitbids.html',
        controller: 'submitbidsCtrl',
        resolve: {
            projectsRef: function (projectService) {
            return projectService.getProjects();
            }
        }
    })
    .when('/project/:projectId', {
    templateUrl: 'projects/project.html',
    controller: 'ThreadCtrl',
     resolve: {
            threadRef: function (projectservice, $route) {
            return projectservice.getThread($route.current.params.threadId);
            },
            commentsRef: function (projectservice, $route) {
            return projectservice.getComments($route.current.params.threadId);
            }
        }
    })
    .otherwise({
        redirectTo: '/login'
    })
    });

//    app.run(function($rootScope, $location, envService){
//        $rootScope.$on('$routeChangeStart', function(event,next,current){
//    //callback
//             if(envService.authUserName()){
//                $rootScope.username = envService.authUserName();
//             }
//             else
//             {
//                 $location.path('/login')
//             }
//        })
//        
  //  })


    