package com.crick.apis.services;

import com.crick.apis.entities.Match;

import java.util.List;

public interface MatchService {
    //get All matches

    List<Match> getAllMatches();
    //get Live Matches

    List<Match> getLiveMatches();

    //Get CWC 2023 pointTable
    List<List<String>> getPointTable();
}
