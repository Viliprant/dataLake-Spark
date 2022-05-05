<?php

namespace App\Controller;

use App\Service\ApiService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;


class ApiController extends AbstractController
{
    #[Route('/cgi', name: 'app_cgi')]
    public function cgiCalcul(ApiService $apiService): Response
    {
        $calcul = $apiService->getJson('CIG_CALCUL');
        $response = new JsonResponse($calcul);

        return $response;
    }

    #[Route('/slp', name: 'app_slp')]
    public function slpCalcul(ApiService $apiService): Response
    {
        $calcul = $apiService->getJson('SLP_CALCUL');
        $response = new JsonResponse($calcul);

        return $response;
    }

    #[Route('/station', name: 'app_station')]
    public function station(ApiService $apiService): Response
    {
        $calcul = $apiService->getJson('STATION');
        $response = new JsonResponse($calcul);

        return $response;
    }

    #[Route('/temp', name: 'app_temp_calcul')]
    public function tempCalcul(ApiService $apiService): Response
    {
        $calcul = $apiService->getJson('TEMP_CALCUL');
        $response = new JsonResponse($calcul);

        return $response;
    }

    #[Route('/vis', name: 'app_vis')]
    public function visCalcul(ApiService $apiService): Response
    {
        $calcul = $apiService->getJson('VIS_CALCUL');
        $response = new JsonResponse($calcul);

        return $response;
    }

    #[Route('/wind-angle', name: 'app_wind-angle')]
    public function windAngleCalcul(ApiService $apiService): Response
    {
        $calcul = $apiService->getJson('WIND_ANGLE_CALCUL');
        $response = new JsonResponse($calcul);

        return $response;
    }

    #[Route('/wind-speed', name: 'app_wind-speed')]
    public function wind_speedCalcul(ApiService $apiService): Response
    {
        $calcul = $apiService->getJson('WIND_SPEED_CALCUL');
        $response = new JsonResponse($calcul);

        return $response;
    }
}
